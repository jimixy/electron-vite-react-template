import { BrowserWindow, app } from 'electron'

import type { BrowserWindowConstructorOptions } from 'electron'

import { Logger } from './logger'

const isDevelopment = !app.isPackaged

async function main() {
  const logger = new Logger()
  logger.initialize(app.getPath('userData'))
  app.whenReady().then(createWindow)
}

function createWindow() {
  const windowOptions: BrowserWindowConstructorOptions = {
    center: true,
    width: 1366,
    height: 768,
    minWidth: 1366,
    minHeight: 768,
    titleBarStyle: 'hidden',
    // backgroundColor: '#204959',
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
      contextIsolation: false,
      devTools: true,
      spellcheck: false,
      nodeIntegration: true,
      webSecurity: false,
      enableRemoteModule: true
    },
    show: false
  }

  const browserWindow = new BrowserWindow(windowOptions)

  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
    browserWindow.focus()
  })

  const port = process.env.PORT || 3000

  if (isDevelopment) {
    void browserWindow.loadURL(`http://localhost:${port}`)
    browserWindow.webContents.on('did-finish-load', () => {
      browserWindow.webContents.openDevTools()
    })
  } else {
    void browserWindow.loadFile('./index.html')
  }
  return browserWindow
}

if (!app.requestSingleInstanceLock()) {
  app.quit()
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

process.nextTick(main)
