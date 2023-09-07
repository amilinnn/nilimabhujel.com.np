import Head from "next/head";
import NavBar from "@/components/shared/NavBar";
import Aboutme from "@/components/Aboutme";
import Banner from "@/components/Banner";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import ScrollArrow from "@/components/shared/ScrollArrow";
import Footer from "@/components/Footer";
import { PageData } from "@/types/data";
import { getHomePageData, getMetaTagData } from "@/service/homepage";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const metaTags: PageData.MetaData = await getMetaTagData();
  const pages: PageData.Data = await getHomePageData();
  return {
    props: { metaTags, pages },
  };
};

export default function Home({ metaTags, pages }: PageData.Datas) {
  const headingColor = pages[0].colorSchema.headingColor.hex
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{metaTags[0].title}</title>
        <meta name="description" content={metaTags[0].description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={metaTags[0].keywords} />
        <meta name="author" content={metaTags[0].title} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metaTags[0].title} />
        <meta property="og:title" content={metaTags[0].title} />
        <meta property="og:description" content={metaTags[0].description} />
        <meta property="og:url" content={metaTags[0].websiteUrl} />
        <meta
          name="google-site-verification"
          content={metaTags[0].googleSiteId}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>{router.pathname !== "/404" && <NavBar pages={pages} />}</header>
      <main>
        <section className="container m-auto">
          <Banner pages={pages} />
          <section id="about-me">
            <h1 className="text-[50px] mb-8 font-semibold" style={{ color: headingColor }}>{pages[0].about.title}</h1>
            <Aboutme pages={pages} />
          </section>
          <section className="mt-14" id="recent-project">
            <h1 className="text-[50px] mb-8 font-semibold" style={{ color: headingColor }}>{pages[0].recentProject.title}</h1>
            <Project pages={pages} />
          </section>
          <section className="mt-14" id="contact">
            <h1 className="text-[50px] mt-[120px] font-semibold text-center" style={{ color: headingColor }}>
              {pages[0].contact.title}
            </h1>
            <Contact pages={pages} />
            <ScrollArrow pages={pages} />
          </section>
          <Footer />
        </section>
      </main>
    </>
  );
}