import { contextBridge } from 'electron';
import { exposedApi } from './core/ipc/exposed-api';

console.log('[MHP x HSD]: Preload script started');

// Expose available IPC methods in renderer thread
contextBridge.exposeInMainWorld('electronApi', exposedApi);
