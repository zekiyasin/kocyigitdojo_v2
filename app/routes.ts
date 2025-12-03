import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("iletisim", "routes/iletisim.tsx"),
  route("kyokushin-nedir", "routes/kyokushin-nedir.tsx"),
  route("sensei", "routes/sensei.tsx"),
  route("senpai", "routes/senpai.tsx"),
  route("sporcu-siralama", "routes/sporcu-siralama.tsx"),
  route("kata", "routes/kata.tsx"),
  route("kumite", "routes/kumite.tsx"),
  route("dojo-kun", "routes/dojo-kun.tsx"),
  route("sinavlar", "routes/sinavlar.tsx"),
  route("kemer-listesi", "routes/kemer-listesi.tsx"),
  route("galeri", "routes/galeri.tsx"),
  route("hakkimizda", "routes/hakkimizda.tsx"),
] satisfies RouteConfig;
