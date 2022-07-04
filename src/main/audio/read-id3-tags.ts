import { read } from 'jsmediatags';
import type { TrackMeta } from '@shared/track';
import type { PictureType } from 'jsmediatags/types';


export const convertCoverImage = (pic: PictureType): string => {
  const { data, format } = pic;
  return`data:${format};base64,${Buffer.from(data).toString('base64')}`;
};

export const readId3Tags = (file: Buffer): Promise<TrackMeta> => {
  return new Promise(((resolve, reject) => {
    read(file, {
      onSuccess: (res) => {
        const { artist, title, year, picture, album } = res.tags;
        const cover = convertCoverImage(picture);

        resolve({
          artist,
          year,
          album,
          title,
          cover,
        })
      },
      onError: reject
    });
  }))
}
