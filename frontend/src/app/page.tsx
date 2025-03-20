"use client";
import Banner from "@/components/modules/Home/Banner/Banner";
import About from "@/components/modules/Home/About/About";
import FeaturedProjects from "@/components/modules/Home/FeaturedProjects/FeaturedProjects";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <section id="about">
        <About />
      </section>
      <FeaturedProjects />
    </div>
  );
};

export default HomePage;
