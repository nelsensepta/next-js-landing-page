function Circle1({ tl = false, br = false, theme }) {
  return (
    <div
      className={`w-56 h-56 absolute ${tl && "left-0 top-0"}  ${
        br && "right-0 bottom-0"
      }`}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={theme === "dark" ? "#fff" : "#5267DF"}
          d="M45.3,-51.4C60.7,-41.1,76.5,-28.7,83.2,-11.6C90,5.6,87.7,27.5,76.9,42.6C66,57.7,46.5,66,26.8,72.8C7.1,79.6,-12.9,84.9,-30.6,80.2C-48.4,75.4,-64,60.7,-70.9,43.5C-77.9,26.3,-76.2,6.6,-72.7,-12.8C-69.2,-32.1,-63.9,-51,-51.5,-61.8C-39.1,-72.5,-19.6,-75.1,-2.3,-72.4C15,-69.7,30,-61.6,45.3,-51.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

function Circle2({ tl = false, br = false, theme }) {
  return (
    <div
      className={`w-56 h-56 absolute ${tl && "left-0 top-0"}  ${
        br && "right-0 bottom-0"
      }`}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={theme === "dark" ? "#FFF" : "#5267DF"}
          d="M34.2,-35.7C49.5,-36,70.7,-32.9,75.5,-23.3C80.3,-13.7,68.7,2.4,63.1,20.8C57.6,39.3,58.2,60.1,48.7,70.1C39.1,80.1,19.6,79.5,4.4,73.4C-10.8,67.4,-21.7,56.1,-35,47.3C-48.3,38.5,-64.2,32.3,-72.5,20.3C-80.7,8.4,-81.4,-9.1,-74.7,-22.6C-68,-36.1,-53.9,-45.4,-40.2,-45.7C-26.5,-46,-13.3,-37.2,-1.9,-34.6C9.4,-31.9,18.9,-35.5,34.2,-35.7Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

export { Circle1, Circle2 };
