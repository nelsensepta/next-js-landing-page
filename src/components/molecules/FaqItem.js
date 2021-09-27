import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function FaqItem({ question, answer }) {
  const [down, setDown] = useState(false);
  return (
    <div className="flex flex-col items-left border-b py-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setDown(!down)}
      >
        <span className="flex-1">{question}</span>
        <FontAwesomeIcon
          icon="chevron-up"
          className={`text-bookmark-purple transition duration-400  ${
            down ? "transform rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {down && <p className="leading-relaxed text-sm pt-2">{answer}</p>}
    </div>
  );
}
