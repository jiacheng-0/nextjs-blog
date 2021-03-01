import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { Table, Descriptions } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const columns = [
  {
    key: "invoiceID",
    title: "Invoice ID",
    dataIndex: "invoiceID",
    render: (invoiceID) => (
      <Link href={`/invoice/${invoiceID}`}>
        <a>{invoiceID}</a>
      </Link>
    ),
  },
  { key: "billingName", title: "Billing Name", dataIndex: "billingName" },
  { key: "creationTime", title: "Creation Time", dataIndex: "creationTime" },
  {
    key: "numberOfDeliveries",
    title: "No. of Deliveries",
    dataIndex: "numberOfDeliveries",
  },
  {
    key: "total",
    title: "Total",
    dataIndex: "total",
    render: (amount) => `$${amount.toFixed(2)}`,
  },
];

const antIcon = (
  <LoadingOutlined style={{ fontSize: 30, color: "#E50239" }} spin />
);

export default function BrawlIndex({ data }) {
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
          {/* <Descriptions title="Brawl Player Info">
            <Descriptions.Item label="UserName" span={3}>
              {data.name}
            </Descriptions.Item>
            <Descriptions.Item label="club name" span={3}>
              {data.club.name}
            </Descriptions.Item>
          </Descriptions> */}
          Name:
          <p>{data.name != undefined ? data.name : "loading..."}</p>
          Club Name:
          <p>{data.club.name != undefined ? data.club.name : "loading..."}</p>
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${process.env.BRAWL_API_KEY}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  // let data = "nothing";
  const res = await fetch(
    "https://api.brawlstars.com/v1/players/%23GCVRCVGY",
    requestOptions
  )
    // .then((response) => response.text())
    // .then((result) => {
    // data = result.json();
    // console.log(typeof result);
    // console.log(typeof data);
    // })
    .catch((error) => console.log("error", error));
  const data = await res.json();
  // console.log("data.name");
  // console.log(data.name);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
