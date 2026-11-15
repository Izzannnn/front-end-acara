import PageHead from "@/components/commons/PageHead";

import LandingCommunity from "./LandingCommunity";
import LandingCta from "./LandingCta";
import LandingEvents from "./LandingEvents";
import LandingFeatures from "./LandingFeatures";
import LandingFooter from "./LandingFooter";
import LandingGuide from "./LandingGuide";
import LandingHero from "./LandingHero";
import LandingNavbar from "./LandingNavbar";
import LandingOrganizer from "./LandingOrganizer";
import LandingPartners from "./LandingPartners";

const Landing = () => {
  return (
    <>
      <PageHead
        title="TixLy | Temukan Event & Pesan Tiket Online"
        description="Jelajahi festival, konser, pertunjukan, dan acara komunitas pilihan. Pesan tiket resmi dengan pembayaran aman dan e-ticket langsung di TixLy."
      />

      <div className="min-h-screen bg-cream text-ink">
        <LandingNavbar />
        <main>
          <LandingHero />
          <LandingPartners />
          <LandingCommunity />
          <LandingEvents />
          <LandingFeatures />
          <LandingGuide />
          <LandingCta />
          <LandingOrganizer />
        </main>
        <LandingFooter />
      </div>
    </>
  );
};

export default Landing;
