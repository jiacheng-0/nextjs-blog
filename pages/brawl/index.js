import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Brawl</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>Team CMC Clan</h1>
        <div className={utilStyles.lightText}>
          <Date dateString="2021-03-02" />
        </div>
        <div>
          Hello
        </div>
      </article>
    </Layout>
  );
}
