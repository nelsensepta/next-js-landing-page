export default function Heading({ title, subTitle }) {
  return (
    <div className="sm:w-3/4 lg:w-6/12 mx-auto px-2 ">
      <h1 className="text-3xl text-center text-bookmark-blue dark:text-title-dark">
        {title}
      </h1>
      <p className="text-center text-bookmark-grey mt-4 dark:text-title-dark-second">
        {subTitle}
      </p>
    </div>
  );
}
