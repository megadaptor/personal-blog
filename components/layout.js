import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'The End Is Never The End Is Never';
export const siteTitle = 'Personal Writing'


export default function Layout({children, home}) {
    return(
        <div className={styles.container}>
            <Head>
            <link rel="icon" href="/favicon.ico"></link>
            <meta
            name="description"
            content="Average site for average posts."
            />
            <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
                siteTitle,
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
              />
            <meta name="og:title" content={siteTitle}/>
            <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header>
                <div className={utilStyles.heading2Xl}>{name}</div>
                <br></br>
                <Link href="/about">About</Link>&nbsp;
                <Link href="/resources">Resources</Link>&nbsp;
                <Link href="/">Blog</Link>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Return</Link>
                </div>
            )}
        </div>
    );
}