import { BrowserWindow, ipcMain, shell } from 'electron';

export const registerIpcHandlers = (mainWindow: BrowserWindow) => {
  ipcMain.handle('window-minimize', () => {
    mainWindow.minimize();
  });

  ipcMain.handle('window-close', () => {
    mainWindow.close();
  });

  ipcMain.handle('web-reload', () => {
    mainWindow.webContents.reload();
  });

  ipcMain.handle('web-force-reload', () => {
    mainWindow.webContents.reloadIgnoringCache();
  });

  ipcMain.handle('web-toggle-devtools', () => {
    mainWindow.webContents.toggleDevTools();
  });

  ipcMain.handle('open-url', (e, url) => {
    shell.openExternal(url);
  });

  /* ToDo: Create a new IPC handler here. In that listener, you should return the Promise of the openMp3Track() function
  *   which can be imported from '@main/audio'. The function opens a file dialog where you can choose an MP3 file and
  *   asynchronously returns an object of type "Track". */
};
