import { useEffect, useState } from "react";

function useStyckyHeader() {
	const [headerHeight, setHeaderHeight] = useState(0);
	const [mobileHeaderHeight, setMobileHeaderHeight] = useState(0);
	
	useEffect(() => {
		const handleScroll = () => {
			const main = document.getElementById("main");
			const header = document?.getElementById("header");
			const headerContainer = header?.querySelector("div");
			const mobileHeader = document?.getElementById("mobile-header");
			const headerRect = header?.getBoundingClientRect();
			const mobileHeaderRect = mobileHeader?.getBoundingClientRect();

      if (window.scrollY > headerHeight) {
        main?.classList.add("compensate-hight");
        header?.classList.add("sticky");
        headerContainer?.classList.add("sticky");
        mobileHeader?.classList.add("sticky");
      } else {
        main?.classList.remove("compensate-hight");
        header?.classList.remove("sticky");
        headerContainer?.classList.remove("sticky");
        mobileHeader?.classList.remove("sticky");
      }

      setHeaderHeight(headerRect?.height || 0);
      setMobileHeaderHeight(mobileHeaderRect?.height || 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight, mobileHeaderHeight]);

  return { headerHeight, mobileHeaderHeight };
}

export default useStyckyHeader;
