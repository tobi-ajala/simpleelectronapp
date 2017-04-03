const electron = require('electron');
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

var mainWindow;
app.on('ready',function(){
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    backgroundColor: '#fff'
  });
  mainWindow.loadURL('https://www.google.com')
});
