import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { colorify, getColors } from "lottie-colorify";

export default function WebDesign({ lottie }) {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      loop: true,
      autoplay: true,
      animationData: colorify(
        ["#f45200", [50, 100, 200], "#fe0088"],
        require(`../../../public/lotties/${lottie}.json`)
      ),
      renderer: "svg",
    });
    console.log(getColors(require(`../../../public/lotties/${lottie}.json`)));
  }, []);
  return (
    <div
      ref={container}
      className="sm:h-3/4 w-full h-full text-center z-10 "
    ></div>
  );
}
