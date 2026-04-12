import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '关于网站',
        description: (
            <>
                <p>网站由一些目前对敲代码很感兴趣的文科研究生维护。网站建设之初希望解决的问题是，为有需要的人减少在中文系应试（如期末考试/考研等）方面需要花费的不必要的时间与精力，提供易得且便携的笔记资料。现在，在完善笔记的内容的基础上，提供扩展性资源与交流平台，也是我们希望做的事情。</p>
                <p>请点击首页“开始阅读”按钮或使用顶部导航栏开始阅读，在这里，你可以找到中文系各板块的学习笔记与资料。</p>
            </>
        ),
    },
    {
        title: '内容简介',
        description: (
            <>
                <p>本站笔记按学科与用途分栏整理，便于按需查阅。</p>
                <p>
                    现代文学与当代文学覆盖现当代文学思潮与代表作家作品； 古代文学目前仅提供唐宋文学史脉络资料；现代汉语侧重语音、文字、词汇、语法与修辞等语言基础；公文写作收录常用文种与行文规范要点。
                </p>
            </>
        ),
    },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
