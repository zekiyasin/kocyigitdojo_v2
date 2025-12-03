import { useFadeInOnMount } from "../hooks/useFadeInOnMount";

import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import News from "../components/News";
import Messages from "../components/Messages";
import AthletesList from "../components/AthletesList";
import Contact from "../components/Contact";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Anasayfa - Koçyiğit Dojo Karate" },
    {
      name: "description",
      content:
        "Koçyiğit Dojo Karate Kulübü'nün resmi web sitesine hoş geldiniz! En son haberler, etkinlikler ve karate ile ilgili bilgiler için bizi takip edin.",
    },
  ];
}

export default function Home() {
  const isLoaded = useFadeInOnMount();

  return (
    <div
      className={`
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <HeroSection />
      <Categories />

      <News />

      <Messages />

      <AthletesList />

      <Contact />
    </div>
  );
}
