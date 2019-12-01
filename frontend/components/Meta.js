import Head from "next/head";

const Meta = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Fosaac</title>
    </Head>
    <style jsx global>{`
      body {
        font-family: Helvetica, Arial, sans-serif;
      }
    `}</style>
  </>
);

export default Meta;
