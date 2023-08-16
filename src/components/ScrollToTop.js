import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default NavigationEvents;