import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '快速上手',
    Svg: require('../../static/img/wemc.svg').default,
    description: (
      <>
        阅读完《WeMC食用级指南》让你分分钟小白变大佬
      </>
    ),
  },
  {
    title: '进阶芝士',
    Svg: require('../../static/img/more_wemc.svg').default,
    description: (
      <>
        要让服务器与众不同？你来对地儿了！
      </>
    ),
  },
  {
    title: '插件宝库',
    Svg: require('../../static/img/book.svg').default,
    description: (
      <>
        各种插件和食用指南应有尽有！
        <code>由于本人不开模组服，故放个凳子等大佬（由于混合端兼容和支持太美丽了,所以让我再咕咕咕一会)</code>
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
