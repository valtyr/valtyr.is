import Head from 'next/head';

import Intro from '../components/Intro';
import Valtyr from '../components/Valtyr';
import Footer from '../components/Footer';
import Animation from '../components/Animation';
import ProjectThumbnails from '../components/ProjectThumbnails';
import { FunctionComponent, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import cookie from 'cookie';

const Index: NextPage<{ animationShown: boolean }> = ({ animationShown }) => {
  const router = useRouter();

  const [animationVisible, setAnimationVisible] = useState(!animationShown);
  const hideAnimation = useCallback(() => {
    document.cookie = 'animationShown=true;path=/;max-age=' + 10 * 60 + ';';
    setAnimationVisible(false);
  }, []);

  return (
    <>
      <Head>
        <title>Valtýr Örn</title>
        <link rel="icon" href="/favicon.ico" />
        <meta lang={router.locale} />
        <link rel="alternate" hrefLang="is" href="https://valtyr.is/is" />
        <link rel="alternate" hrefLang="en-US" href="https://valtyr.is" />
      </Head>

      {animationVisible && <Animation onEnd={hideAnimation} />}

      <Intro />
      <ProjectThumbnails />
      <Valtyr />
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const parsedCookie = cookie.parse(ctx.req.headers.cookie || '');
  const animationShown = parsedCookie['animationShown'] === 'true';

  return { props: { animationShown } };
};

export default Index;
