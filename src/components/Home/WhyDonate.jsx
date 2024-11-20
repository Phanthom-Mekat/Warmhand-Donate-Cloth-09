import { TiTick } from "react-icons/ti";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyDonate = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const reasons = [
    {
      text: "Raise funds for a  charity of your choice – we give 82% of the proceeds to your chosen charity.",
    },
    {
      text: "Make your life easier – book a collection on a date that works for you, no more trips to the charity shop.",
    },
    {
      text: "Help us save the planet – your clothes don’t go to landfill, plus there’s no more plastic bags through your door.",
    },
    {
      text: "Give your clothes a second home – and those in need around the world access to affordable clothing.",
    },
    {
      text: "Donate safely – with contactless collection, there’s no need to worry about COVID.",
    },
  ];

  return (
    <section
      className="bg-gray-100 py-16 px-6 lg:px-12 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="md:w-11/12 mx-auto text-gray-800">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary">Why Donate Clothes?</h2>
          <p className="text-lg text-gray-600 mt-2">Declutter your wardrobe. But leave your heart full.</p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div data-aos="fade-right">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="/donationbox.png" // Replace with actual image URL
                alt="Clothes Donation"
                className="w-56 md:ml-56"
              />
            </div>
          </div>

          {/* Right Column */}
          <div data-aos="fade-left" className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary mb-4">By giving us your pre-loved clothes and textiles, you’ll:</h3>
            <ul className="space-y-3">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <TiTick className="text-green-500 text-2xl flex-shrink-0" />
                  <span className="text-gray-700">{reason.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyDonate;
