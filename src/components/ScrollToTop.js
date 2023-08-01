import { useEffect } from "react";
import { useRouter } from "next/router";

function ScrollToTop() {
  const { pathname, push } = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const setTimestamp = () => {
      // your event listener logic here
    };

    window.addEventListener('load', setTimestamp);

    return () => {
      window.removeEventListener('load', setTimestamp);
    };
  }, []);

  return null;
}

export default ScrollToTop;