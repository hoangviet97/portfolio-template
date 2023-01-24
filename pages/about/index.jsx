import React from "react";
import AboutTemplate1 from "../../components/about/aboutTemplate1/AboutTemplate1";
import Footer from "../../components/footer/Footer";

const Index = () => {
  return (
    <div className="bg-white dark:bg-gray-800 lg:ml-[150px] min-h-[100vh] px-[60px] flex flex-col justify-center">
      <AboutTemplate1 />
      <Footer />
    </div>
  );
};

export default Index;
