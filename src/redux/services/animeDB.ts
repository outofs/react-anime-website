import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Genre, DataType, AnimeCard } from "../../interfaces";

const apiKeys: string[] = [
  "345b01ea29msh5c5076bc876188dp131a82jsn3edc4a662631",
  "892d604e95msh2b1855773043079p1887e2jsn5d59b0fb3285",
  "b142f6a0a3mshc1334d2d0468312p12b89cjsnbe97a4d4746b",
];

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function randomApiKey(): string {
  const indexOfApi = getRandomInt(apiKeys.length);
  return apiKeys[indexOfApi];
}

console.log(randomApiKey());

export const animeDbApi = createApi({
  reducerPath: "animeDbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://anime-db.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        // "b142f6a0a3mshc1334d2d0468312p12b89cjsnbe97a4d4746b"
        // "345b01ea29msh5c5076bc876188dp131a82jsn3edc4a662631"
        randomApiKey()
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<Genre[], string>({
      query: () => "/genre",
    }),

    getTop10Anime: builder.query<
      DataType,
      { genre?: string; page?: number; size?: number }
    >({
      query: (arg) => {
        const { page, size } = arg;
        return {
          url: `/anime?page=${page}&size=${size}&sortBy=ranking&sortOrder=asc`,
          params: { page, size },
        };
      },
    }),

    getAnimeByGenre: builder.query<
      DataType,
      { genre?: string; page?: number; size?: number }
    >({
      query: (arg) => {
        const { genre, page, size } = arg;
        return {
          url: `/anime?page=${page}&size=${size}&genres=${genre}`,
          params: { genre, page, size },
        };
      },
    }),

    getAnimeBySearch: builder.query<DataType, string>({
      query: (endpoint: string) => `/anime?page=1&size=40&search=${endpoint}`,
    }),

    getAnimeById: builder.query<AnimeCard, string>({
      query: (id: string) => `/anime/by-id/${id}`,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetTop10AnimeQuery,
  useGetAnimeByGenreQuery,
  useGetAnimeBySearchQuery,
  useGetAnimeByIdQuery,
} = animeDbApi;
