'use client';
import { useGetDataByCategory } from "../api/api-hooks";

import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from '../api/config';
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default  function pixel() {
    const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

    return (
        <main className='main-inner'>
            {pixelGames ? (
                <CardsListSection id='pixel' title='пиксельные' data={pixelGames} />)
                : (
                    <Preloader />
                )
            }
        </main>
    )
}