import { any } from "prop-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/error/Error";
import Loader from "../../components/loader/Loader";
import { AnimeCard } from "../../interfaces";
import { useGetAnimeByIdQuery } from "../../redux/services/animeDB";

import "./detail.scss";

const Detail = () => {
  const { category, id } = useParams();

  const itemId: any = id;

  const [item, setItem] = useState<AnimeCard | undefined>();

  const { data, isFetching, error } = useGetAnimeByIdQuery(itemId);

  useEffect(() => {
    setItem(data);
  }, [id]);

  if (isFetching) return <Loader title={"Loading movie"} />;
  if (error) return <Error />;

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">{item.title}</h1>
              <div className="genres">
                {item.genres.map((genre, i) => (
                  <span className="genres__item" key={i}>
                    {genre}
                  </span>
                ))}
              </div>
              <p className="overview">{item.synopsis}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
