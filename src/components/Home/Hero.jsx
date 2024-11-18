/* eslint-disable react/prop-types */
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const campaigns = [
  { id: 1, title: "Winter Warmth Drive", description: "Help us provide warm clothing to those in need.", img: "/hero.jpg" },
  { id: 2, title: "Holiday Meal Program", description: "Donate to ensure everyone has a festive meal this season.", img: "/hero1.jpg" },
  { id: 3, title: "Frost-Free Shelter Initiative", description: "Support our efforts to keep the homeless warm this winter.", img: "/hero2.webp" },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute left-0 md:-left-72 top-1/2 -translate-y-1/2 z-20 btn btn-ghost text-primary rounded-full p-2 hover:bg-black/70"
      onClick={onClick} 
    >
      <ChevronLeft className="h-6 w-6" />
    </button>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute right-0 md:-right-72 top-1/2 -translate-y-1/2 z-20 btn btn-ghost text-primary rounded-full p-2 hover:bg-black/70"
      onClick={onClick}
    >
      <ChevronRight className="h-6 w-6" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveIndex(current),
    arrows: true,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${campaigns[activeIndex].img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <div className="relative w-full max-w-4xl">
          <Slider {...settings}>
            {campaigns.map((campaign) => (
              <div key={campaign.id}>
                <div>
                  <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{campaign.title}</h2>
                  <p className="text-lg md:text-2xl text-gray-400">{campaign.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <button className="mt-10  btn btn-outline  text-lg font-semibold text-white  hover:bg-primary/90">
          About Us
        </button>
      </div>
    </section>
  );
}

export default Hero;