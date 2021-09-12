import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './Intro.module.css';
import ColoredLink from './ColoredLink';
import { Category, logEvent } from '../utils/analytics';
import localeToName from '../utils/localeToName';

const IntroIS: FunctionComponent = () => {
  return (
    <>
      <h1>Ég heiti Valtýr Örn</h1>
      <p>Ég er forritari, viðmótshönnuður og nemandi.</p>
      <p>
        Ég útskrifaðist úr{' '}
        <span className={styles.institution}>
          Mennta&shy;skólanum í Reykja&shy;vík
        </span>{' '}
        árið 2017 þar sem ég sinnti for&shy;mennsku elsta nemenda&shy;félags
        íslands en er nú að ljúka við BS nám í Hugbúnaðar&shy;verkfræði við{' '}
        <span className={styles.institution}>Hás&shy;kóla Íslands.</span>
      </p>
      <p>
        Meðfram skóla hef ég unnið sem front-end forritari hjá ýmsum
        fyrir&shy;tækjum. Þar á meðal má nefna influencer marketing sprotann{' '}
        <ColoredLink href="https://takumi.com" color="rgb(247, 245, 236)">
          Takumi
        </ColoredLink>{' '}
        og SaaS fyrir&shy;tækið{' '}
        <ColoredLink href="https://avo.app" color="#fee9f6">
          Avo
        </ColoredLink>{' '}
        sem fór í gegn um Y-Combinator hraðal&shy;inn.
      </p>
      <p>
        Árið 2018 setti ég af stað Anorak, samfélags&shy;miðil fyrir nemendur og
        nemenda&shy;félög í framhalds&shy;skólum á Íslandi. Anorak var um
        nokkurt skeið mest sótta smá&shy;forritið á íslenska App Store og sá
        mikla notkun í skólum á borð við MR, Verzló og Kvennó.
      </p>
      <p className={styles.ferilskra}>
        <a
          href="https://github.com/valtyr/ferilskra/releases/latest/download/ferilskra.pdf"
          onClick={() => logEvent(Category.LinkClicked, 'Icelandic CV')}
        >
          Sækja ferilskrá
        </a>
        <br />
        <a
          href="https://github.com/valtyr"
          onClick={() => logEvent(Category.LinkClicked, 'Github')}
        >
          github.com/valtyr
        </a>
      </p>
    </>
  );
};

const IntroEN: FunctionComponent = () => {
  return (
    <>
      <h1>Hi I'm Valtýr Örn</h1>
      <p>I'm a full-stack programmer and UX designer.</p>
      <p>
        I graduated from the{' '}
        <span className={styles.institution}>Reykjavík Junior College</span> in
        2017. During my time there I was president of the oldest student body
        organization in Iceland. Now I'm finishing a degree in computer science
        and engineering at the{' '}
        <span className={styles.institution}>University of Iceland.</span>
      </p>

      <p>
        Alongside my studies and on my gap year I've worked for a few
        interesting companies. Among them are the influncer marketing startup{' '}
        <ColoredLink href="https://takumi.com" color="rgb(247, 245, 236)">
          Takumi
        </ColoredLink>{' '}
        and the Y-Combinator alum{' '}
        <ColoredLink href="https://avo.app" color="#fee9f6">
          Avo
        </ColoredLink>
        .
      </p>

      <p>
        In 2018 I launched Anorak, an internal social network for students and
        student organizations in Icelandic secondary schools, which reached
        number one on the Icelandic app store charts.
      </p>

      <p className={styles.ferilskra}>
        <a
          href="https://github.com/valtyr/ferilskra/releases/latest/download/cv.pdf"
          target="_blank"
          onClick={() => logEvent(Category.LinkClicked, 'English CV')}
        >
          Download CV
        </a>
        <br />
        <a
          href="https://github.com/valtyr"
          target="_blank"
          onClick={() => logEvent(Category.LinkClicked, 'Github')}
        >
          github.com/valtyr
        </a>
      </p>
    </>
  );
};

const IntroText: FunctionComponent<{ locale: string }> = ({ locale }) => {
  switch (locale) {
    case 'is':
      return <IntroIS />;

    default:
      return <IntroEN />;
  }
};

const Intro: FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className={styles.intro}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src="/logo.svg" alt="VÖK logo" />
        <div className={styles.locales}>
          {router.locales.map((locale) => (
            <Link key={locale} href={router.asPath} locale={locale}>
              <a
                className={classNames(
                  styles.locale,
                  locale === router.locale && styles.activeLocale,
                )}
              >
                {localeToName(locale)}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <IntroText locale={router.locale} />
    </div>
  );
};

export default Intro;
