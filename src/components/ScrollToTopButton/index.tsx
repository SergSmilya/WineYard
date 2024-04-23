import { useEffect, useState } from "react";

import { IconButton } from "@mui/material";
import { secondary } from "../../theme/palette";

import upArrow from "../../assets/icons/up-arrow.svg";

function ScrollToTopButton() {
  const [toTopButton, setToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setToTopButton(true);
      } else setToTopButton(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {toTopButton && (
        <IconButton
          onClick={scrollUp}
          sx={{
            position: "fixed",
            bottom: "10%",
            right: "5%",
            zIndex: "300",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: secondary.light,
            transition: "background-color 0.5s",
            "&:hover": {
              backgroundColor: secondary.dark,
            },
          }}
        >
          <img src={upArrow} alt="Arrow" />
        </IconButton>
      )}
    </>
  );
}

export default ScrollToTopButton;
