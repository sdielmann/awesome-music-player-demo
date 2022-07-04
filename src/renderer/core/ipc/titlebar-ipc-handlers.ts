import { ipcRenderer } from 'electron';

const titlebarIpcHandlers = {
  exit() {
    ipcRenderer.invoke('window-close');
  },
  reload() {
    ipcRenderer.invoke('web-reload');
  },
  force_reload() {
    ipcRenderer.invoke('web-force-reload');
  },
  toggle_devtools() {
    ipcRenderer.invoke('web-toggle-devtools');
  },
  minimize() {
    ipcRenderer.invoke('window-minimize');
  },
  open_url(url: string) {
    ipcRenderer.invoke('open-url', url);
  },
  /* ToDo: Adapt this method here so that it calls the ipcRenderer.invoke function. The same string channel identifier
      must be used as defined in the backend handler. The Promise returned by ipcRenderer.invoke will contain the
      "Track" object sent by the IpcMain thread. */
  open_file() {
    console.log('Not implemented!');
  },
};

export type TitlebarIpcApi = typeof titlebarIpcHandlers;
export type TitlebarIpcApiFnName = keyof TitlebarIpcApi;

export default titlebarIpcHandlers;
