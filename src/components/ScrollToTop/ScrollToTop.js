import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>{
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }
  }, []);

  return isVisible ? (
    <div>
      <a href="#top">
        <span class="material-symbols-outlined">arrow_upward</span>
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;

const ScrollTop = styled.div``;
