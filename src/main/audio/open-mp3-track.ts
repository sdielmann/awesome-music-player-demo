import fs from 'fs';
import { convertSong } from './convert-song';
import { readId3Tags } from './read-id3-tags';

export const openMp3Track = async () => {
  try {
    /* ToDo: Open a file dialog in electron and make sure the user can select exactly one mp3 file. Assign the selected
    *   file path to the following variable. */
    const filePath = '' // ???;
    const buffer = fs.readFileSync(filePath);
    const data = convertSong(buffer);
    const meta = await readId3Tags(buffer)

    return { data, meta };
  } catch (err) {
    console.error(err);
  }
}
