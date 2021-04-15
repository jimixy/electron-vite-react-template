import * as path from 'path'
import * as fs from 'fs'
import * as esbuild from 'esbuild'
import startViteServer from './run-vite'
import startElectron from './run-electron'

import {
  cannotFoundTSConfigMessage,
  CompileError,
  finishMessageDev,
  formatDiagnosticsMessage,
  startMessage,
  mainPath,
  outDir,
  entryPath
} from './common'

const rollup = require('rollup')
const chalk = require('chalk')
const options = require('./rollup.config')

function reportError(errors: CompileError[]) {
  const reportingMessage = formatDiagnosticsMessage(errors)
  console.error(reportingMessage)
}

function watchFunc() {
  // once here, all resources are available
  const watcher = rollup.watch(options('development'))
  watcher.on('change', (filename) => {
    // const log = chalk.green(`change -- ${filename}`)
    // console.log(111, filename)
  })
  watcher.on('event', (ev) => {
    // console.log(222, ev)
    if (ev.code === 'END') {
      buildComplete(outDir)
      //   // init-未启动、started-第一次启动、restarted-重新启动
      //   electron.electronState === 'init' ? electron.start() : electron.restart()
      // } else if (ev.code === 'ERROR') {
      //   console.log(ev.error)
      // }
    }
  })
}

function buildStart() {
  console.log(startMessage)
}

async function electronClosed() {
  if (viteClose) {
    await viteClose()
  }
}

function buildComplete(dir: string) {
  void startElectron(dir, electronClosed)
}

function notFoundTSConfig() {
  console.error(chalk.red(cannotFoundTSConfigMessage))
  process.exit()
}

let viteClose: () => Promise<void>

async function main() {
  // Start vite server
  viteClose = await startViteServer()

  watchFunc()
  // Start dev for main process
  // void esDev(reportError, buildStart, buildComplete, notFoundTSConfig)
}

void main()

//
// SUPPORTING BUILD SCRIPT
//

function transformErrors(error: esbuild.BuildFailure): CompileError[] {
  const errors = error.errors.map(
    (e): CompileError => {
      return {
        location: e.location,
        message: e.text
      }
    }
  )
  return errors
}

async function esDev(
  reportError: { (errors: CompileError[]): void; (arg0: CompileError[]): void },
  buildStart: () => void,
  buildComplete: { (dir: string): void; (arg0: string): void },
  notFoundTSConfig: { (): void; (): void }
) {
  const tsconfigPath = path.join(mainPath, 'tsconfig.json')
  if (!fs.existsSync(tsconfigPath)) {
    notFoundTSConfig()
  }

  try {
    await esbuild.build({
      outdir: outDir,
      entryPoints: [entryPath],
      tsconfig: tsconfigPath,
      format: 'cjs',
      logLevel: 'silent',
      errorLimit: 0,
      incremental: true,
      platform: 'node',
      sourcemap: true,
      watch: {
        onRebuild: (error) => {
          if (error) {
            reportError(transformErrors(error))
          } else {
            buildComplete(outDir)
          }
        }
      }
    })
    buildComplete(outDir)
  } catch (e) {
    if (!!e.errors && !!e.errors.length && e.errors.length > 0) {
      const error = e as esbuild.BuildFailure
      reportError(transformErrors(error))
    }
  }
}
