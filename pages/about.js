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
                <p>I'm from Malaysia. I hack and research (study).</p>
                <p><b>Things that are cool and I might talk about <sub>but do not claim to know everything about</sub>:</b></p>
                <p>Film, Music, Video Games, Retro Consoles & Computers, Penetration Testing & Information Security, Reverse Engineering, Software Development, My Love, Data Science, Machine Learning</p>
                <p><b>Favourite shows:</b></p>
                <p>Breaking Bad, You, Inside Job, Futurama, Black Mirror</p>
            </section>
        </Layout>
    )
}