'use client'

import { getGamesByCategory } from './data/data-utils'

import { Banner } from './components/Banner/Banner.jsx';

import { Promo } from './components/Promo/Promo.jsx';

import { CardList } from './components/CardsListSection/CardList.jsx'

import { useEffect } from "react";



export default function Home(props) {
  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error("Ошибка получения данных");
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        return error;
      }
    };
    getData("https://api-code-2.practicum-team.ru/games");
  }, []);


  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");
  return (
    <main className="main">
      <Banner />

      <CardList id="popular" title="Популярные" data={popularGames} />
      <CardList id="new" title="Новинки" data={newGames} />

      <Promo />
    </main>
  );
};
