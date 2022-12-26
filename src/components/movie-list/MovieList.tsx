import React, { useState, useEffect } from "react";
import "./movie-list.scss";

import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Link } from "react-router-dom";
import Button from "../button/Button";

import { AnimeCard, MovieListPropsType } from "../../interfaces";
import Loader from "../loader/Loader";
import Error from "../error/Error";
import MovieCard from "../movie-card/MovieCard";

const MovieList = (props: MovieListPropsType) => {
  const { data, isFetching, error } = props.getMovies({
    genre: props.genre,
    page: props.page,
    size: props.size,
  });
  const [items, setItems] = useState<AnimeCard[] | undefined>([]);

  useEffect(() => {
    setItems(data?.data);
    console.log(data);
  }, [isFetching]);

  if (isFetching) return <Loader title={"Loading movies"} />;

  if (error) return <Error />;

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items?.map((item: AnimeCard, i) => (
          <SwiperSlide key={i}>
            {/* <img src={`${item.image}`} alt="" /> */}
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// MovieList.propTypes = {
//   category: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
// };

export default MovieList;
