export default function Contact() {
  return (
    <section className="bg-bookmark-purple text-white py-20 ">
      <div className="container ">
        <div className="sm:w-3/4 lg:w-1/2 mx-auto">
          <p className="font-light uppercase text-center mb-8">
            1,000+ AlREADY JOINED
          </p>
          <h1 className="text-2xl text-center">
            Stay up-to-date with what we're doing
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <input
              type="text"
              placeholder="Enter Your Text"
              className="focus:outline-none focus:ring-2 ring-bookmark-grey flex-1 px-2 py-3 rounded-md text-black"
            />
            <button
              type="button"
              className="btn btn-red  hover:bg-bookmark-white hover:text-black focus:outline-none focus:ring-2 ring-bookmark-grey"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
