import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dollar Smart</title>
        <meta
          name="description"
          content="Dollar Smart is a fake e-commerce website created using Platzi Fake Store API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-xl font-bold font-mono">Dollar Smart</h1>
    </div>
  );
}
