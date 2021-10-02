import Image from "next/image";
import Link from "next/link";

export default function Card({ img, title, subTitle }) {
  return (
    <div className="flex flex-col rounded-md shadow-md overflow-hidden justify-start hover:shadow-2xl">
      <Image
        src={`/img/${img}.jpg`}
        width={1920}
        height={1280}
        quality={100}
        placeholder="blur"
        blurDataURL={`/img/${img}.jpg`}
        className="object-cover hover:scale-105 transform transition-all duration-400 cursor-pointer"
      />
      <div className="p-6 flex flex-col text-left space-y-3">
        <h1 className="text-bookmark-blue text-xl font-semibold dark:text-title-dark">
          {title}
        </h1>
        <p className="text-bookmark-grey font-light leading-relaxed dark:text-title-dark-second">
          {subTitle}
        </p>
        <Link href="#">
          <a className=" hover:underline">Read more</a>
        </Link>
      </div>
    </div>
  );
}
