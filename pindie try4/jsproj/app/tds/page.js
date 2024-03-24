'use client';
import { useGetDataByCategory } from "../api/api-hooks";

import { Preloader } from "../components/Preloader/Preloader";
import { endpoints } from '../api/config';
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default  function TDS() {
    const TDSGames = useGetDataByCategory(endpoints.games, "TDS");

    return (
        <main className='inner-main'>

            {TDSGames ? (
                < CardsListSection id='TDS' title='TDS' data={TDSGames} />
            )
                : (
                    <Preloader />
                )
            }

        </main>
    )
}