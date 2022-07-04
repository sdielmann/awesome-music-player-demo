import { app, BrowserWindow } from 'electron';
import { registerIpcHandlers } from './ipc';
import path from 'path';

// Electron Forge automatically creates these entry points
declare const APP_WINDOW_WEBPACK_ENTRY: string;
declare const APP_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let window: BrowserWindow;

/**
 * Create Application Window
 * @returns {BrowserWindow} Application Window Instance
 */
export function createAppWindow(): BrowserWindow {
  const isDev = process.env.NODE_ENV === 'development';

  // Create new window instance
  window = new BrowserWindow({
    width: 800,
    height: 500,
    backgroundColor: '#1f252c',
    show: false,
    resizable: false,
    autoHideMenuBar: true,
    frame: false,
    //titleBarStyle: 'hidden',
    icon: path.resolve('assets/images/appIcon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      preload: APP_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // Load the index.html of the app window.
  window.loadURL(APP_WINDOW_WEBPACK_ENTRY);

  // Show window when its ready to
  window.on('ready-to-show', () => {
    if (isDev) {
      window.webContents.openDevTools({
        mode: 'undocked'
      });
    }

    window.show();
  });

  // Register Inter Process Communication for main process
  registerMainIPC();

  // Close all windows when main window is closed
  window.on('close', () => {
    window = null;
    app.quit();
  });

  return window;
}

/**
 * Register Inter Process Communication
 */
function registerMainIPC() {
  /**
   * Here you can assign IPC related codes for the application window
   * to Communicate asynchronously from the main process to renderer processes.
   */
  registerIpcHandlers(window);
}
