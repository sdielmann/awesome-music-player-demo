import fs from 'fs';
import { dialog } from 'electron';
import { convertSong } from './convert-song';
import { readId3Tags } from './read-id3-tags';

export const openMp3Track = async () => {
  try {
    const result = await dialog.showOpenDialog({
      title: 'Open File',
      properties: [ 'openFile' ],
      filters: [
        { name: 'Audio Files', extensions: ['mp3'] },
      ]
    });

    if (result.canceled || result.filePaths.length !== 1) {
      return;
    }

    const filePath = result.filePaths[0];
    const buffer = fs.readFileSync(filePath);
    const data = convertSong(buffer);
    const meta = await readId3Tags(buffer)

    return { data, meta };
  } catch (err) {
    console.error(err);
  }
}
