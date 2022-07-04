
export interface TrackMeta {
  artist: string;
  title: string;
  album: string;
  year: string;
  cover: string; // data-url
}

export interface Track {
  meta: TrackMeta;
  data: string; // data-url
}
