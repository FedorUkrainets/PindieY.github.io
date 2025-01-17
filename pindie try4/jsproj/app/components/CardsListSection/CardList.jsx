import Link from 'next/link'
import Styles from './CardsListSection.module.css'
import { Card } from '../Card/Card'




export const CardList = (props) => {
  return (
    <>
      <section className={Styles["list-section"]}>
        <h2 className={Styles["list-section__title"]} id={props.id}>{props.title}</h2>
        <ul className={Styles["list"]}>
          {props.data.map((item) => {
            return (
              <li className={Styles["list__item"]} key={item.id}>
                <Link href={`/games/${item.id}`} className={Styles["card-list__link"]}>
                  <Card
                    {...item}
                  />
                </Link>

              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}