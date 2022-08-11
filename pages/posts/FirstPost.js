import Link from 'next/link';
import { useState, useEffect } from 'react';
import posts from './posts';
import styles from '../../styles/FirstPost.module.css';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <section className={styles.post}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <h1>Adem&apos;s blog</h1>
        </Link>
      </header>
      {posts.map(function (post) {
        return (
          <section key={post.id} className={styles.section}>
            <h1>{`${post.id}. ${post.title}`}</h1>
            <h3>{post.subtitle}</h3>
            <p>{post.text}</p>
          </section>
        );
      })}
    </section>
  );
}
