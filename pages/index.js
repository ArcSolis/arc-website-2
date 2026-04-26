import Head from "next/head";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import AboutSection from "../components/AboutSection";
import StoriesSection from "../components/StoriesSection";
import UseCasesSection from "../components/UseCasesSection";
import InsightsSection from "../components/InsightsSection";
import CtaSection from "../components/CtaSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import { AmbientBackdrop } from "../components/ui/AmbientBackdrop";

export default function Home() {
  const scrollToProcess = () => {
    if (typeof document === "undefined") {
      return;
    }
    const target = document.getElementById("process");
    if (!target) {
      return;
    }
    window.scrollTo({
      top: target.offsetTop - 72,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>ArcSolis Limited | Oil and Gas Engineering Consulting</title>
        <meta
          name="description"
          content="ArcSolis Limited provides engineering consulting and project advisory services for oil and gas developments across West Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page-shell">
        <AmbientBackdrop />
        <Header />
        <main id="top" className="site-main">
          <HeroSection onScrollToProcess={scrollToProcess} />
          <ProcessSection />
          <AboutSection />
          <StoriesSection />
          <UseCasesSection />
          <InsightsSection />
          <CtaSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
