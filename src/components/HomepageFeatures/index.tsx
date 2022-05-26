import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Sản phẩm',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        BizChain cung cấp các sản phẩm dựng sẵn và đồng hành cùng bạn. Sản phẩm của chúng tôi là những "thực thể sống", thường xuyên được cập nhật và cải tiến.
      </>
    ),
  },
  {
    title: 'Dịch vụ',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Xây dựng/Lập trình web theo yêu cầu. Bạn sẽ luôn được tư vấn kỹ cho mọi vấn đề trước khi bắt đầu, chứ không chỉ chăm "chỉ làm theo yêu cầu".
      </>
    ),
  },
  {
    title: 'Đào tạo',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Học lập trình trình Serverless cho cá nhân, trường hợc và doanh nghiệp. Đặc biệt, mỗi sản phẩm của BizChain, chúng tôi đều có khóa học tương ứng.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
