import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  // [
  //   {
  //     id: 'my-markdown',
  //     title: 'Lab: Creating virtual machines',
  //     date: '2021-01-11'
  //   },
  //   {
  //     id: 'ssg-ssr',
  //     title: 'When to Use Static Generation v.s. Server-side Rendering',
  //     date: '2020-01-02'
  //   },
  // ]
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Year 3 SMU student, major in Software Development</p>
        <p>Graduating in Dec 2021.</p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Brawl Stars Project</h2>
        <Link href={`/brawl`}>
          <a>Let's see some brawl stars :)</a>
        </Link>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Log In</h2>
        <Link href={`/login`}>
          <a>Go to Log In Page</a>
        </Link>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* [
          {
            id: 'my-markdown',
            title: 'Lab: Creating virtual machines',
            date: '2021-01-11'
          },
          {
            id: 'ssg-ssr',
            title: 'When to Use Static Generation v.s. Server-side Rendering',
            date: '2020-01-02'
          },
        ] */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
