import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
import tree from '@site/static/img/tree-transparent.png'
import mountain from '@site/static/img/mountain.png'
import react from '@site/static/img/react.png'

const FeatureList = [
  {
    title: 'Easy to Use',
    src: mountain,
    description: (
      <>
        SwiftGift is designed to be used by anyone! Simply login with any
        variety of existing accounts, and get started.
      </>
    ),
  },
  {
    title: 'Completely Free',
    src: tree,
    description: (
      <>
        No ads, subscriptions, or payments.
        <br />
        Completely free. Always.
      </>
    ),
  },
  {
    title: 'Entirely Transparent',
    src: react,
    description: (
      <>
        We have nothing to hide. Therefore, SwiftGift is open sourced.
        Contributions are welcome!
      </>
    ),
  },
]

function Feature({ src, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={src} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
