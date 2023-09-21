const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadURL("https://cal.com")
}

app.on('ready', createWindow)
