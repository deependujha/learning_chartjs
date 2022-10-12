import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning Chart js</title>
        <meta name="description" content="Learning chart js with next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <h1 className={`${styles.title} blueText `}>learning Chart.Js</h1>

        <p>Get started by installing in the next.js app:</p>
        <ul className={`greyText `}>
          <li>yarn add chart.js react-chartjs-2</li>
          <li>
            For more examples visit here:{" "}
            <a
              href="https://react-chartjs-2.js.org/examples"
              className="blueText"
              target={`_blank`}
            >
              Chart.js examples
            </a>
          </li>
        </ul>

        <div className={styles.grid}>
          <Link href="/chartjs/Line_Chart">
            <a className={styles.card}>
              <h2>LineChart &rarr;</h2>
            </a>
          </Link>

          <Link href="/chartjs/Horizontal_Bar">
            <a className={styles.card}>
              <h2>Horizontal Bar &rarr;</h2>
            </a>
          </Link>

          <Link href="/chartjs/Line_Chart">
            <a className={styles.card}>
              <h2>Line Chart &rarr;</h2>
            </a>
          </Link>

          <Link href="/chartjs/Pie_Chart">
            <a className={styles.card}>
              <h2>Pie Chart &rarr;</h2>
            </a>
          </Link>

          <Link href="/chartjs/Scatter_Chart">
            <a className={styles.card}>
              <h2>Scatter Chart &rarr;</h2>
            </a>
          </Link>

          <Link href="/chartjs/Stacked_Bar">
            <a className={styles.card}>
              <h2>Stacked Bar &rarr;</h2>
            </a>
          </Link>
          <Link href="/chartjs/Vertical_Bar">
            <a className={styles.card}>
              <h2>Vertical Bar &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
