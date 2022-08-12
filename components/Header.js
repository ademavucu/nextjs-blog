import React from 'react';
import styles from '../styles/Header.module.css'
import Link from 'next/link';

export default function ({headerColor}) {
    return (
        <header className={styles.header} style={{color:headerColor, borderColor:headerColor}}>
        <Link href="/">
            <div>Unutma</div>
        </Link>
        </header>
    )
}