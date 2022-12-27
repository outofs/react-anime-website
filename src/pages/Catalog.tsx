import React from "react";

import { useParams } from "react-router";
import MovieGrid from "../components/movie-grid/MovieGrid";
import PageHeader from "../components/page-header/PageHeader";

const Catalog = () => {
  const { category }: any = useParams();
  console.log(category);
  return (
    <>
      <PageHeader>{`${category[0].toUpperCase()}${category.slice(
        1
      )}`}</PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid />
        </div>
      </div>
    </>
  );
};

export default Catalog;
