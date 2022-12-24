export interface AnimeCard {
  _id: string;
  title: string;
  alternativeTitles: string[];
  ranking: number;
  genres: string[];
  episodes: number;
  hasEpisode: boolean;
  hasRanking: boolean;
  image: string;
  link: string;
  status: string;
  synopsis: string;
  thumb: string;
  type: string;
}

export interface DataType {
  data: AnimeCard[];
  meta: any;
}

export interface Genre {
  _id: string;
}
