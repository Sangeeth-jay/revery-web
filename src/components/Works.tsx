import React from 'react'
import  Link  from 'next/link'

export default function Works() {
  return (
    <section className="works">
      <h2 className="works__title">Works</h2>
      <ul className="works__list">
        <li className="works__item">
          <Link href="/">
            <a className="works__link">Link 1</a>
          </Link>
        </li>
        <li className="works__item">
          <Link href="/">
            <a className="works__link">Link 2</a>
          </Link>
        </li>
        <li className="works__item">
          <Link href="/">
            <a className="works__link">Link 3</a>
          </Link>
        </li>
      </ul>
    </section>
  )
}
