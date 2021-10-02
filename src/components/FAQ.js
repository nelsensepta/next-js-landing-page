import FaqItem from "./molecules/FaqItem";
import Link from "next/link";
import Heading from "./molecules/Heading";

export default function FAQ() {
  return (
    <section className="bg-bookmark-white py-20 mt-20 dark:bg-bookmark-dark-second">
      <Heading
        title="Frequenty Asked Questions"
        subTitle="Here are some of our FAQs. if you have any other questions you'd like answered please feel free"
      />
      <div className="container">
        <div className="flex flex-col sm:w-3/4 lg:w-8/12 mt-12 mx-auto">
          <FaqItem
            question="What is Bookmark ?"
            answer="Mauris bibendum dignissim tellus, a tempus ante porttitor sit amet. Nunc pulvinar molestie turpis pulvinar pulvinar. Mauris."
          />
          <FaqItem
            question="How can I request a new browser ?"
            answer="a tempus ante porttitor sit amet. Nunc pulvinar molestie turpis pulvinar pulvinar. Lorem ipsum dolor sit amet, Mauris."
          />
          <FaqItem
            question="Is There a mobile app ?"
            answer="consectetur adipiscing elit. Mauris bibendum dignissim tellus, a tempus ante porttitor sit amet. Nunc pulvinar molestie turpis pulvinar pulvinar. Mauris."
          />
          <FaqItem
            question="What about other Chromium browsers ?"
            answer="adipiscing elit. Mauris bibendum dignissim tellus, a tempus ante porttitor sit amet. Lorem ipsum dolor sit amet, consectetur pulvinar. Mauris."
          />
          <FaqItem
            question="What are the advantages"
            answer="elit. Mauris bibendum dignissim tellus, a tempus ante porttitor sit amet. Nunc pulvinar molestie turpis pulvinar pulvinar. Mauris."
          />
          <Link href="#">
            <a className="btn btn-purple hover:bg-bookmark-white hover:text-black self-center mt-12">
              More Info
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
