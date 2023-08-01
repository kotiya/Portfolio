import { useEffect } from "react";
import { useRouter } from "next/router";

function ScrollToTop() {
  const { pathname, push } = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;