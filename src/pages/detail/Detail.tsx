import { any } from "prop-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
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
  }, [isFetching]);

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
              <div className="alt-title">
                <h2>Alternative titles:</h2>
                {item.alternativeTitles.map((title, i) => (
                  <h3>{title}</h3>
                ))}
              </div>
              <div className="genres">
                {item.genres.map((genre, i) => (
                  <span className="genres__item" key={i}>
                    {genre}
                  </span>
                ))}
              </div>

              <p className="overview">{item.synopsis}</p>

              <a className="link" href={item.link} target="_blank">
                Visit on MyAnimeList.net
              </a>

              <div className="status-episodes">
                <div className="status">
                  <h3>Status: {item.status}</h3>
                </div>
                <div className="episodes">
                  <h3>Episodes: {item.episodes}</h3>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
