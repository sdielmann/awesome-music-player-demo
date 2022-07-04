import titlebarIpcHandlers from './titlebar-ipc-handlers';

export const exposedApi = {
  titlebar: titlebarIpcHandlers
}

export type ExposedElectronAPI = typeof exposedApi;
