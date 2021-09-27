import Image from "next/image";
import Card from "./molecules/Card";
import Heading from "./molecules/Heading";

export default function Extend() {
  return (
    <section className="py-20 mt-20">
      <Heading
        title="Download the extension"
        subTitle="Fusce sem nulla, aliquam eu auctor rutrum, laoreet suscipit magna. Proin ut lacus dictum felis sodales convallis. Donec id metus justo. Phasellus vitae neque ligula. Nunc facilisis auctor urna eget"
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   max-w-screen-lg mt-16 ">
        <Card
          img="mac7"
          title="Book Search "
          subTitle="Donec ut orci aliquet, gravida urna quis, vehicula velit. In hac
          habitasse platea dictumst. Etiam fermentum, lectus non eleifend
          bibendum, dui tellus faucibus eros, sed."
        />
        <Card
          img="mac11"
          title="How to make Coffie"
          subTitle="lectus non eleifend
          bibendum, dui tellus faucibus eros, sed
          habitasse platea dictumst. Etiam fermentum,"
        />
        <Card
          img="mac9"
          title="I dont know"
          subTitle="ectus non eleifend
          bibendum, dui tellus faucibus eros, sed
          habitasse platea dictumst. Etiam  dui tellus faucibus eros, sed
          habitasse platea dictumst. Etiam fermentum,"
        />
      </div>
    </section>
  );
}
