import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import type { Route } from "./+types/root";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kocyigitdojo.com/" />
        <meta
          property="og:title"
          content="Koçyiğit Dojo | Kyokushin Karate İstanbul"
        />
        <meta
          property="og:description"
          content="İstanbul Tuzla'da profesyonel Kyokushin ve Shinkyokushin Karate eğitimi. Disiplin, güç ve öz güven."
        />
        <meta
          property="og:image"
          content="https://www.kocyigitdojo.com/og-image.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="Koçyiğit Dojo Logo - Kyokushin Karate"
        />
        <meta property="og:site_name" content="Koçyiğit Dojo" />
        <meta property="og:locale" content="tr_TR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kocyigitdojo.com/" />
        <meta
          name="twitter:title"
          content="Koçyiğit Dojo | Kyokushin Karate İstanbul"
        />
        <meta
          name="twitter:description"
          content="İstanbul Tuzla'da profesyonel Kyokushin ve Shinkyokushin Karate eğitimi. Disiplin, güç ve öz güven."
        />
        <meta
          name="twitter:image"
          content="https://www.kocyigitdojo.com/og-image.png"
        />
        <meta
          name="twitter:image:alt"
          content="Koçyiğit Dojo Logo - Kyokushin Karate"
        />

        {/* Additional SEO */}
        <meta name="theme-color" content="#1A2238" />
        <meta name="author" content="Koçyiğit Dojo" />
        <meta
          name="keywords"
          content="Kyokushin Karate, Shinkyokushin, Karate Tuzla, Karate İstanbul, Dövüş Sporları, Kyokushin Türkiye"
        />

        {/* Favicon Links */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Koçyiğit Dojo" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        {/* Schema.org Yapısal Veri - SportsActivityLocation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              name: "Koçyiğit Dojo",
              image: "https://www.kocyigitdojo.com/og-image.png",
              description:
                "İstanbul Tuzla'da profesyonel Kyokushin ve Shinkyokushin Karate eğitimi.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Halil Türkkan Kız Anadolu İmam Hatip Lisesi",
                addressLocality: "Tuzla",
                addressRegion: "İstanbul",
                postalCode: "34940",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.872433527777766",
                longitude: "29.33247287652368",
              },
              telephone: "+905520042705",
              email: "kocyigitdojo@gmail.com",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Wednesday", "Friday"],
                  opens: "18:00",
                  closes: "21:00",
                },
              ],
              url: "https://kocyigitdojo.com",
              sameAs: [
                "https://instagram.com/kocyigit_dojo",
                "https://facebook.com/edanurkoçyigit",
                "https://www.tiktok.com/@kocyigit.dojo",
              ],
              sport: "Kyokushin Karate",
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
