import { useEffect } from "react";
import { useRouter } from "next/router";

function ScrollToTop() {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      window.scrollTo(0, 0);
    });
    return () => {
      router.events.off("routeChangeComplete", () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);
  return null;
}

export default ScrollToTop;