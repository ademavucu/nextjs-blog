import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Header from "../components/Header"
import AllPosts from "./posts/AllPosts"

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>
          Unutma
        </title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header headerColor="white"/>
      <section className={styles.hero}>
        <div className={styles.heroInfo}>
          <h1>N&apos;oublie pas.</h1>
          <h3>Devenir meilleur. Chaque jour.</h3>
          <p>Le temps passe. N&apos;attends pas le moment parfait. Le moment parfait n&apos;existe pas. </p>
        </div>
        <Link href="/posts/AllPosts">
          <button className={styles.btn}>
            Clique ici pour découvrir le blog
          </button>
        </Link>
      </section>
    </section>
  );
}
