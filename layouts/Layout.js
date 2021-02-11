import Head from "next/head";
import Header from "../components/Header";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="max-w-full container mx-auto  min-h-screen pt-10 bg-gray-300">
        {children}
      </main>
    </div>
  );
};

export default Layout;
