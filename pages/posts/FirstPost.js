import Link from 'next/link';
import { useState, useEffect } from 'react';
import posts from './posts';
import styles from '../../styles/FirstPost.module.css';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" type="image/x-icon" href="../../public/Ademo.png"></link>
      </Head>
      <Link href="/">
        <h1 className={styles.h1}>Adem's blog</h1>
      </Link>
      {posts.map(function (post) {
        const [comment, setComment] = useState(false);
        return (
          <section key={post.id} className={styles.section}>
            <h1>{`${post.id}. ${post.title}`}</h1>
            <h3>{post.subtitle}</h3>
            <p>{post.text}</p>
          </section>
        );
      })}
    </>
  );
}
