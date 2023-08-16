import Head from "next/head";
import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import ScrollArrow from "@/components/shared/ScrollArrow";
import Footer from "@/components/Footer";
import { PageData } from "@/types/data";
import { getHomePageData } from "@/service/homepage";

export const getStaticProps = async () => {
  const pages: PageData.Data = await getHomePageData();
  const metaTag: PageData.Data = await getHomePageData();
  return {
    props: { pages, metaTag },
  };
};

export default function Home({ pages, metaTags }: PageData.Data) {
  return (
    <>
      <Head>
        <title>{metaTags?.title}</title>
        <meta name="description" content={metaTags?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={metaTags?.keywords} />
        <meta name="author" content={metaTags?.title} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metaTags?.title} />
        <meta property="og:title" content={metaTags?.title} />
        <meta property="og:description" content={metaTags?.description} />
        <meta property="og:url" content={metaTags?.websiteUrl} />
        <meta
        name="google-site-verification"
        content={metaTags?.googleSiteID}
      />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="container m-auto">
          <Banner pages={pages} />
          <section id="about-me">
            <h1 className="text-[50px] mb-8 font-semibold">{pages[0].about.title}</h1>
            <Aboutme pages={pages} />
          </section>
          <section className="mt-14 md:mt-4" id="recent-project">
            <h1 className="text-[50px] mb-8 font-semibold">{pages[0].recentProject.title}</h1>
            <Project pages={pages} />
          </section>
          <section className="mt-12" id="contact">
            <h1 className="text-[50px] mt-[120px] font-semibold text-center">
              {pages[0].contact.title}
            </h1>
            <Contact pages={pages} />
            <ScrollArrow />
          </section>
          <Footer />
        </section>
      </main>
    </>
  );
}
