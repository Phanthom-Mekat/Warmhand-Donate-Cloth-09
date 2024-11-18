
function AboutUs() {
  return (
    <section className="py-16 px-4 bg-gray-100">
    <h2 className="text-4xl font-bold text-center mb-8 text-primary">About Us</h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2">
          <img
            src="/hero3.jpg"
            alt="Winter Clothing Donation"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

  
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 mb-6">
            The Winter Donation web application connects donors with those in need of winter clothing across Bangladesh. Our mission is to ensure that everyone, especially vulnerable individuals in rural and low-income areas, stays warm during the colder months.
          </p>
          <h3 className="text-2xl font-semibold  mb-4">How You Can Contribute</h3>
          <p className="text-lg text-gray-700 mb-6">
            After logging in, you can browse ongoing donation campaigns, select the one you wish to support, and donate clothing via the form. Your contributions will directly help those in need.
          </p>
          <button className="bg-secondary btn text-white  rounded-lg text-lg mt-6 hover:bg-secondary/70">
            Donation Campaigns
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;