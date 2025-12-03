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
    {
      title:
        "Koçyiğit Dojo | Kyokushin Karate İstanbul & Shinkyokushin Türkiye",
    },
    {
      name: "description",
      content:
        "İstanbul'da gerçek Kyokushin Karate eğitimi. Koçyiğit Dojo ile fiziksel ve zihinsel gücünü keşfet. Shinkyokushin disipliniyle tanışın.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.kocyigitdojo.com/",
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
