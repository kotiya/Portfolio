import { useEffect } from "react";
import { useRouter } from "next/router";

function ScrollToTop() {
  const { route } = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);
  return null;
}

export default ScrollToTop;
