import { useEffect } from "react";
import { useRouter } from "next/router";

function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Add event listeners here if necessary

    return () => {
      // Remove event listeners here if necessary
    };
  }, [router.pathname]);

  return null;
}

export default ScrollToTop;