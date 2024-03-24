import Styles from './CardsList.module.css'

import { PopularCardsFragement } from './PopularCardsFragment.jsx'

export const PopularCardsList = () => {
    return (
        <>
            <section className={Styles['list-section']}>
                <h2 className={Styles['list-section__title']} id="popular">
                    Популярное
                </h2>
                <ul className={Styles['list']}>
                    <PopularCardsFragement />
                </ul>
            </section>
        </>
    )
}