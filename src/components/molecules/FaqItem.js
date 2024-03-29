import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";
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

        <BsCaretUpFill
          className={`text-bookmark-purple dark:text-white transition duration-500  ${
            down ? "transform rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {down && (
        <p className="leading-relaxed text-sm pt-2 dark:text-title-dark-second">
          {answer}
        </p>
      )}
    </div>
  );
}
