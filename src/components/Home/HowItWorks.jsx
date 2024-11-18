import { useEffect } from "react";
import { FaCalendarCheck, FaBoxOpen, FaTruck, FaHandsHelping } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import AOS from "aos";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const steps = [
    {
      icon: <BiSolidDonateHeart className="text-white text-3xl" />,
      title: "Choose Your Charity",
      description: "Pick one of our partner charities. Your donation directly benefits them.",
    },
    {
      icon: <FaCalendarCheck className="text-white text-3xl" />,
      title: "Book Your Collection",
      description: "Schedule a convenient collection time with just a few clicks.",
    },
    {
      icon: <FaBoxOpen className="text-white text-3xl" />,
      title: "Bag Your Clothes",
      description: "Pack your clean clothes in a bag or box and get ready for pickup.",
    },
    {
      icon: <FaTruck className="text-white text-3xl" />,
      title: "We Collect Your Clothes",
      description: "Our team will pick up your donations and deliver them to the charity.",
    },
    {
      icon: <FaHandsHelping className="text-white text-3xl" />,
      title: "Your Charity Benefits",
      description: "Your donations provide essential support to those in need.",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-6" data-aos="fade-up">
      <div className="container mx-auto">

        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-primary mb-10"
        >
          How It Works
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Steps Section */}
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className="flex items-start space-x-4"
              >
                <div className="bg-secondary p-4 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Donation Guidelines Section */}
          <div
            data-aos="fade-left"
            className="bg-gray-100 shadow-lg p-6 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Please Donate:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <TiTick className="text-green-500 text-xl" />
                <span>Good quality adult and children’s clothing</span>
              </li>
              <li className="flex items-center space-x-2">
                <TiTick className="text-green-500 text-xl" />
                <span>Scarves, gloves, and winter accessories</span>
              </li>
              <li className="flex items-center space-x-2">
                <TiTick className="text-green-500 text-xl" />
                <span>Pairs of shoes</span>
              </li>
              <li className="flex items-center space-x-2">
                <TiTick className="text-green-500 text-xl" />
                <span>Handbags and other essentials</span>
              </li>
            </ul>
            <h3 className="text-2xl font-bold text-primary mt-6 mb-4">
              Please Don’t Donate:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <RxCross2 className="text-red-500 text-xl" />
                <span>Damaged or stained clothing</span>
              </li>
              <li className="flex items-center space-x-2">
                <RxCross2 className="text-red-500 text-xl" />
                <span>Large furniture or electrical appliances</span>
              </li>
              <li className="flex items-center space-x-2">
                <RxCross2 className="text-red-500 text-xl" />
                <span>Books, toys, or DVDs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
