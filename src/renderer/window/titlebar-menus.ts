import { TitlebarIpcApiFnName } from '@renderer/core/ipc/titlebar-ipc-handlers';

export type TitlebarMenuItem = {
  name: string;
  action?: TitlebarIpcApiFnName;
  shortcut?: string;
  value?: string;
  items?: TitlebarMenuItem[];
};

export type TitlebarMenu = {
  name: string;
  items: TitlebarMenuItem[];
};

const titlebarMenus: TitlebarMenu[] = [
  {
    name: 'File',
    items: [
      {
        name: 'Open',
        action: 'open_file',
      },
      {
        name: '__',
      },
      {
        name: 'Exit',
        action: 'exit',
      },
    ],
  },
  {
    name: 'View',
    items: [
      {
        name: 'Reload',
        action: 'reload',
        shortcut: 'Ctrl+R',
      },
      {
        name: 'Force Reload',
        action: 'force_reload',
        shortcut: 'Ctrl+Shift+R',
      },
      {
        name: 'Toggle Developer Tools',
        action: 'toggle_devtools',
        shortcut: 'Ctrl+Shift+I',
      },
    ],
  },
  {
    name: 'Help',
    items: [
      {
        name: 'GitHub Repository',
        action: 'open_url',
        value: 'https://github.com/sdielmann/hsd-electron-exercise',
      },
    ],
  },
];

export default titlebarMenus;
