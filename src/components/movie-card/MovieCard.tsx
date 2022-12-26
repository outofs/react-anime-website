import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

import "./movie-card.scss";
import { AnimeCard, AnimeCardProps } from "../../interfaces";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const MovieCard = (props: AnimeCardProps) => {
  const item: AnimeCard = props.item;
  const link = `/${item.type}/${item._id}`;

  return (
    <Link to={link}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <Button>
          <Icon icon="bx:play" />
        </Button>
      </div>
      <h3>{item.title}</h3>
    </Link>
  );
};

export default MovieCard;
