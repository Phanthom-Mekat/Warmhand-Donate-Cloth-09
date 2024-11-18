import AboutUs from "../components/Home/AboutUs";
import CallToAction from "../components/Home/CallToAction";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import WhyDonate from "../components/Home/WhyDonate";

const HomePage = () => {
    return (
        <div>
            {/* home  */}
            <Hero/>
            {/* about us  */}
            <AboutUs/>
            {/* how it works */}
            <HowItWorks/>
            {/* why donate us */}
            <WhyDonate/>
            {/* another section  */}
            <CallToAction/>
        </div>
    );
};

export default HomePage;