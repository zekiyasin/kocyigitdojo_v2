import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Route değişince otomatik en üste çık + AOS tazele
  useEffect(() => {
    window.scrollTo({ top: 0 });
    AOS.refresh();
  }, [pathname]);

  // Scroll’a göre butonu göster/gizle
  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all z-50"
      aria-label="Yukarı çık"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
