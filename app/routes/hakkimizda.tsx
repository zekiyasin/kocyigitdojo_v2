import { useFadeInOnMount } from "../hooks/useFadeInOnMount";

import type { Route } from "./+types/hakkimizda";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hakkımızda - Koçyiğit Dojo Karate" },
    {
      name: "description",
      content: "Koçyiğit Dojo Karate Kulübü hakkında bilgi edinin.",
    },
  ];
}

const About = () => {
  const isLoaded = useFadeInOnMount();

  return (
    <div
      className={`
        transition-all duration-1000 ease-out
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <h2>Hakkında</h2>
    </div>
  );
};

export default About;
