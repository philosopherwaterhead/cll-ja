import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '計画的に構成された言語',
    Svg: require('../../static/img/chapter1.svg').default,
    description: (
      <>
        規則的で例外がなく、1300の根語を組み合わせて語彙を作ることができます。
      </>
    ),
  },
  {
    title: '文化的に中立',
    Svg: require('../../static/img/chapter4.svg').default,
    description: (
      <>
        広範な言語を元に根語を創出したため、文化特有的な影響の薄い設計をしています。
      </>
    ),
  },
  {
    title: '理論・実践的な応用が可能',
    Svg: require('../../static/img/chapter7.svg').default,
    description: (
      <>
        コンピュータによる文章の解析が容易であり、プログラミング言語としても扱うことができます。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
