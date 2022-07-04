/**
 * Converts a file by a given filePath to a data-url that can be read by the browser.
 * @param buffer The file in Buffer format to convert
 */
export const convertSong = (buffer: Buffer): string => {
  const mime = 'audio/mp3';
  const encoding = 'base64';
  const data = buffer.toString(encoding);
  return 'data:' + mime + ';' + encoding + ',' + data;
};
