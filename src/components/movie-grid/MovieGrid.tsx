import React, { useEffect, useState } from "react";
import "./movie-grid.scss";
import { Icon } from "@iconify/react";

import { AnimeCard } from "../../interfaces";
import MovieCard from "../movie-card/MovieCard";
import {
  useGetGenresQuery,
  useGetAnimeByGenreQuery,
  useGetAnimeBySearchQuery,
} from "../../redux/services/animeDB";
import Loader from "../loader/Loader";
import Error from "../error/Error";

const MovieGrid = () => {
  const [items, setItems] = useState<AnimeCard[] | undefined>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [endPoint, setEndPoint] = useState<string>("");
  const [finalSearchEndpoint, setFinalSearchEndpoint] = useState("");
  const [currentGenre, setCurrentGenre] = useState("Action");

  const genresArr: string[] = [
    "Award Winning",
    "Action",
    "Suspense",
    "Horror",
    "Ecchi",
    "Avant Garde",
    "Sports",
    "Supernatural",
    "Fantasy",
    "Gourmet",
    "Boys Love",
    "Drama",
    "Comedy",
    "Mystery",
    "Girls Love",
    "Slice of Life",
    "Adventure",
    "Romance",
    "Sci-Fi",
    "Erotica",
    "Hentai",
  ];
  //   const {
  //     data: genresData,
  //     isFetching: genresIsFetching,
  //     error: genresError,
  //   } = useGetGenresQuery("");

  const { data, isFetching, error } = useGetAnimeByGenreQuery({
    genre: currentGenre,
    page: page,
    size: 40,
  });

  const { data: searchData } = useGetAnimeBySearchQuery(finalSearchEndpoint);

  useEffect(() => {
    setItems(searchData?.data);
    setCurrentGenre("");
  }, [finalSearchEndpoint]);

  useEffect(() => {
    setItems(data?.data);
    setTotalPages(data?.meta.totalPage);
    setFinalSearchEndpoint("");
  }, [currentGenre, page, isFetching]);

  const onclickHandler = function (genre: string) {
    setCurrentGenre(genre);
    setPage(1);
  };

  const onChangeHandler = function (event: React.FormEvent<HTMLInputElement>) {
    setEndPoint(event.currentTarget.value);
  };

  const submitHandler = function (event: React.FormEvent) {
    event.preventDefault();
    setFinalSearchEndpoint(endPoint);
  };

  if (isFetching) return <Loader title={"Loading movies"} />;
  if (error) return <Error />;

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Anime name"
          type="text"
          value={endPoint}
          onChange={onChangeHandler}
        />
        <button type="submit" className="btn small">
          Search
        </button>
      </form>
      <div className="main-content">
        <div className="genres">
          <h2 className="genres__title">Genres</h2>
          <ul className="genres__content">
            {genresArr.map((genre, i) => (
              <li
                className="genre__item"
                key={i}
                onClick={() => {
                  onclickHandler(genre);
                }}
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <div className="movie-grid">
          <div className="movie-grid__content">
            {items?.map((item: AnimeCard) => (
              <MovieCard item={item} />
            ))}
          </div>
          <div className="pagination">
            {page === 1 ? (
              ""
            ) : (
              <Icon
                icon="bx:chevron-left-circle"
                className="small"
                onClick={() => {
                  setPage(page - 1);
                }}
              />
            )}
            <div className="pagination__current">Page {page}</div>

            {page === totalPages ? (
              ""
            ) : (
              <Icon
                icon="bx:chevron-right-circle"
                className="small"
                onClick={() => {
                  setPage(page + 1);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieGrid;
