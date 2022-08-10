import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

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
      <header className={styles.header}>
        <div className={styles.logo}>Unutma</div>
      </header>
      <section className={styles.hero}>
        <h1>N'oublie pas.</h1>
        <h3>Ici, on devient meilleur chaque jour, ensemble.</h3>
        <p>
          Que ce soit la santé mentale et physique, gestion personnelle des
          finances, on apprend ensemble comment être meilleur jour après jour...
        </p>
        <Link href="/posts/FirstPost">
          <button className={styles.btn}>
            Clique ici pour découvrir le blog
          </button>
        </Link>
      </section>
    </section>
  );
}
