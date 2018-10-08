import { app, BrowserWindow, Tray, Menu} from 'electron' // eslint-disable-line
import path from 'path';

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\') // eslint-disable-line
}

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:9080'
  : `file://${__dirname}/index.html`;

const trayMenu = [
  {
    label: '上一首',
    click() {

    },
  },
  {
    label: '暂停',
    click() {

    },
  },
  {
    label: '下一首',
    click() {

    },
  },
  {
    label: '关于',
    click() {

    },
  },
  {
    label: '退出',
    click() {

    },
  },
];

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 768,
    useContentSize: false,
    width: 1290,
    resizable: false,
    autoHideMenuBar: true,
    backgroundColor: '#4169E1',
    icon: '../renderer/assets/logo.png',
    // frame:false,  //无边框窗口，之后完善后可能会使用
  });

  mainWindow.loadURL(winURL);
  console.log(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  const trayIcon = path.join(__dirname, '../renderer/assets');
  const contextMenu = Menu.buildFromTemplate(trayMenu);
  // console.log(path.join(trayIcon, 'favicon.ico'));
  // const tray = new Tray("../renderer/assets/favicon.ico");
  const tray = new Tray(path.join(trayIcon, 'favicon.ico'));
  tray.setToolTip('Listen-now');
  tray.setContextMenu(contextMenu);
  tray.on('click', () => {
    mainWindow.show();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'
autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})
app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
