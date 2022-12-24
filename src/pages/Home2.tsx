import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import { Genre, AnimeCard } from "../interfaces";
import {
  useGetGenresQuery,
  useGetTop20AnimeQuery,
} from "../redux/services/animeDB";

const Home = () => {
  const { data, isFetching, error } = useGetTop20AnimeQuery("");

  const [endPoint, setEndPoint] = useState<string>("");
  const [container, setContainer] = useState<AnimeCard[] | undefined>([]);
  const [finalPoint, setFinalPoint] = useState<string>("");
  const [genres, setGenres] = useState<Genre[] | undefined>([]);

  const onChangeHandler = function (event: React.FormEvent<HTMLInputElement>) {
    setEndPoint(event.currentTarget.value);
  };

  const submitHandler = function (event: React.FormEvent) {
    event.preventDefault();
    setFinalPoint(endPoint);
  };

  // const animeData = data?.data;
  // console.log(data);
  // setContainer(data);
  // useEffect(() => {
  //   fetchMe();
  // }, [finalPoint]);

  // const fetchMe = function () {
  //   fetch(
  //     `${apiConfig.baseUrl}/anime?page=1&size=10&search=${endPoint}&genres=Hentai`,
  //     apiConfig.options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setContainer(response.data))
  //     .catch((err) => console.error(err));

  // console.log("Container is", container);
  // };

  // const getGenres = function () {
  //   setGenres(data);
  //   console.log(genres);
  // };

  return (
    <div>
      <Home />
      <Header />
      {/* <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler} />
        <button type="submit">Submit</button> */}
      {/* <button onClick={getGenres}>Get Genres</button> */}
      {/* </form> */}

      {data?.data.map((item: AnimeCard) => {
        return (
          <div>
            <img src={item.image} alt="" />
            <p>{item?.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
