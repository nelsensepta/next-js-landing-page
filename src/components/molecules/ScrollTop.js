import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 500) {
      setShow(true);
    } else setShow(false);
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <div
      className={`${
        show && "sm:bottom-10 sm:right-5"
      } sm:fixed absolute bottom-5 right-5 p-2.5 sm:bg-bookmark-red/40 dark:bg-white backdrop-blur-sm bg-black/10 rounded-md z-50 sm:-bottom-full cursor-pointer sm:transition sm:duration-1000`}
      onClick={scrollTop}
    >
      <FontAwesomeIcon
        icon="arrow-up"
        size="lg"
        className="text-bookmark-white dark:text-blue-dark"
      />
    </div>
  );
}
