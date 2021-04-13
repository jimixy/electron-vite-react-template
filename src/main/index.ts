import { BrowserWindow, app } from 'electron'
import { getTwConfig, getTwConfigPath } from '@twstyled/util'

import type { BrowserWindowConstructorOptions } from 'electron'

const resolvedTailwindConfig = getTwConfig(getTwConfigPath())

const isDevelopment = !app.isPackaged

function createWindow() {
  const windowOptions: BrowserWindowConstructorOptions = {
    center: true,
    width: 1366,
    height: 768,
    minWidth: 1366,
    minHeight: 768,
    backgroundColor: resolvedTailwindConfig.theme.colors.primary[800],
    titleBarStyle: 'hidden',
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
      contextIsolation: true,
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
      browserWindow.openDevTools()
    })
  } else {
    void browserWindow.loadFile('./index.html')
  }
}

if (!app.requestSingleInstanceLock()) {
  app.quit()
}

void app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
