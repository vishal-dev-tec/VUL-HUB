import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/landing/Hero.jsx";
import LearningPaths from "../components/landing/LearningPaths.jsx";
import Features from "../components/landing/Features.jsx";
import TopicsOverview from "../components/landing/TopicsOverview.jsx";
import Community from "../components/landing/Community.jsx";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-7">
        <Hero />
        <LearningPaths />
        <Features />
        <TopicsOverview />
        <Community />
      </main>
      <Footer />
    </>
  );
}
