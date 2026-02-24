import React from "react";
import Slider from "../components/Slider/Slider";
import ShortIntro from "../components/Static/ShortIntro/ShortIntro";
import WhyChoose from "../components/Static/WhyChoose/WhyChoose";
import ContactMessage from "../components/Static/ConatctMessage/ContactMessage";
import PatentReviews from "../components/Static/PatentReviews/PatentReviews";

const Home = () => {
  return (
    <>
      {/* // slider  */}
      <Slider />
      {/* short hospital intro */}
      <ShortIntro />
      {/* why choose page */}
      <WhyChoose />
      {/* testimonial */}
      <PatentReviews />
      {/* conatct  */}
      <ContactMessage />
    </>
  );
};

export default Home;
