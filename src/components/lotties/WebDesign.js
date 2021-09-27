import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

export default function WebDesign({ lottie }) {
  const container = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      loop: true,
      autoplay: true,
      animationData: require(`../../../public/lotties/${lottie}.json`),
      renderer: "svg",
    });
  }, []);
  return (
    <div
      ref={container}
      className="sm:h-3/4 w-full h-full text-center z-10"
    ></div>
  );
}
