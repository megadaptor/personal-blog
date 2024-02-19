import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function About(){
    return(
        <Layout about>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>IT student in Malaysia. I hack and research!</p>
                <p>Things I enjoy:</p>
                <p><b>Film / Music / Personal studies / Penetration Testing / Reverse Engineering / My boyfriend</b></p>
            </section>
        </Layout>
    )
}