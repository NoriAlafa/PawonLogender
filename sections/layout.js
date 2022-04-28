import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

const Layout = ({ children}) => {
  return (
    <>
      <Head>
        <title>Pawon | Logender</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

        <Header />
      <div className="min-h-screen mx-auto max-w-2xl flex flex-col">
        <main className="flex-grow container mx-auto px-4 sm:px-6 dark:bg-gray-900  dark:text-gray-100 ">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;