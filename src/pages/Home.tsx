import React from "react";
import { Link } from "react-router-dom";
import OutlineButton from "../components/button/OutlineButton";
import Hero from "../components/hero/Hero";
import MovieList from "../components/movie-list/MovieList";
import {
  useGetTop10AnimeQuery,
  useGetAnimeByGenreQuery,
} from "../redux/services/animeDB";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top 10 Anime</h2>
            <h4 style={{ fontWeight: 300 }}>by MyAnimeList.net</h4>
          </div>
          <MovieList
            getMovies={useGetTop10AnimeQuery}
            page={1}
            size={10}
            genre={""}
          />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Award Winning</h2>

            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList
            getMovies={useGetAnimeByGenreQuery}
            page={1}
            size={10}
            genre={"Award Winning"}
          />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Slice of Life Genre</h2>

            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList
            getMovies={useGetAnimeByGenreQuery}
            page={1}
            size={10}
            genre={"Slice of Life"}
          />
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Hentai</h2>

            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList
            getMovies={useGetAnimeByGenreQuery}
            page={1}
            size={10}
            genre={"Hentai"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
