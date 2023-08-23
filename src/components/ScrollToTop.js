import { useEffect } from "react";
import { useRouter } from "next/router";

function ScrollToTop() {
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return null;
}

export default ScrollToTop;