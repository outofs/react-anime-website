import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Genre, DataType } from "../../interfaces";

export const animeDbApi = createApi({
  reducerPath: "animeDbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://anime-db.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "892d604e95msh2b1855773043079p1887e2jsn5d59b0fb3285"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<Genre[], string>({
      query: () => "/genre",
    }),
    getTop20Anime: builder.query<DataType, string>({
      query: () => "/anime?page=1&size=20&sortBy=ranking&sortOrder=asc",
    }),
  }),
});

export const { useGetGenresQuery, useGetTop20AnimeQuery } = animeDbApi;
