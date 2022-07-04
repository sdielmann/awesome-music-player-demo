import type { ExposedElectronAPI } from './exposed-api';

// The exposed variables from the "preload" script will be available on the window object
const api: ExposedElectronAPI = (window as any).electronApi;

export const useIpc = (): ExposedElectronAPI => {
  return { ...api };
}

export default useIpc;
