import type { ExposedElectronAPI } from './exposed-api';

const api: ExposedElectronAPI = (window as any).electronApi;

export const useIpc = (): ExposedElectronAPI => {
  return { ...api };
}

export default useIpc;
