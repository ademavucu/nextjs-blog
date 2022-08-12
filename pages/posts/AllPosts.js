import React from "react"
import blogPosts from './posts.json';
import styles from '../../styles/AllPosts.module.css';
import Head from 'next/head';
import Header from "../../components/Header"

export default function AllPosts() {
  console.log(blogPosts)
  return (
    <section className={styles.post}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header/>
      <header className={styles.header}>
        <h1>Adem&apos;s blog</h1>
      </header>
      {blogPosts.map(function (post) {
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
