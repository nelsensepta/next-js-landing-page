import Feature from "./molecules/Feature";
import Heading from "./molecules/Heading";

export default function Features() {
  return (
    <section className="bg-bookmark-white dark:bg-bookmark-dark-second py-20 mt-20 lg:mt-60">
      <Heading
        title="Features"
        subTitle="Cras nec augue non nibh venenatis imperdiet dignissim commodo mauris.
        Curabitur fermentum porttitor cursus. Sed."
      />
      <Feature
        lottieOn
        brOn
        tlOn
        one
        lottieName="webdesign"
        title="Bookmark in one click"
        content="Proin gravida vestibulum tellus, at tristique tellus. Suspendisse lacus leo, faucibus a volutpat et, euismod eget mauris. Aenean fringilla ullamcorper libero, in vehicula purus ornare."
      />
      <Feature
        reverse
        title="Get Your Bookmark"
        content="In non orci eget nibh rhoncus posuere a nec felis. Donec in ipsum leo. Nunc id sem at dolor tempor consequat. In rhoncus mattis lorem, in ultrices nunc ultricies vitae."
      />
      <Feature
        lottieOn
        lottieName="web-design-animation"
        title="Search Your Bookmark"
        content="Maecenas felis nisi, malesuada ornare faucibus at, dictum ac velit. Aenean posuere risus quis tortor venenatis congue. Phasellus eu veli."
      />
    </section>
  );
}
