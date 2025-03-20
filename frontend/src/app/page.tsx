"use client";
import Banner from "@/components/modules/Home/Banner/Banner";
import About from "@/components/modules/Home/About/About";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default HomePage;
