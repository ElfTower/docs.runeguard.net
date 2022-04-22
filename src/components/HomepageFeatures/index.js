import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Explore Hirelm',
    Image: require('@site/static/img/landscape.jpg').default,
    description: (
      <>
        Discover the secrets, races, and rich lore of Hirelm.
      </>
    ),
  },
  {
    title: 'Game Design',
    Image: require('@site/static/img/card_back.png').default,
    description: (
      <>
        Learn about the intricate details of our game.
      </>
    ),
  },
  {
    title: 'Tokens and NFTs',
    Image: require('@site/static/img/screen2.jpg').default,
    description: (
      <>
        Discover how our tokens and NFTs will be used within Runeguard.
      </>
    ),
  },
];

function Feature({Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
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
  );
}
