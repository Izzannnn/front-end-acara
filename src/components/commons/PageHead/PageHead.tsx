import Head from "next/head";

interface PropTypes {
  title?: string;
  description?: string;
}

const PageHead = (props: PropTypes) => {
  const { title = "Acara", description } = props;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/images/general/logo.svg" type="image/x-icon" />
    </Head>
  );
};

export default PageHead;
