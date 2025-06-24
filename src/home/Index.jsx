// import React from "react";
// import "animate.css";
// import MainHome from "../Components/home";
// import Services from "../Components/servicesCard";
// import Footer from "../Components/footer";
// import Contact from "../Components/contactForm";
// import PortfolioSection from "../Components/aboutUs";
// import IMG from "../assets/de.png";

// const Home = () => {
//   return (
//     <div>
//       <MainHome />

//       <div className="container max-w-7xl mx-auto">
//         <Services />

//         {/* <div className="w-full my-8">
//           <img src={IMG} alt="Description" className="w-full h-auto object-cover" />
//         </div> */}

//         <PortfolioSection />
//       </div>

//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default Home;









import React from "react";
import "animate.css";
import MainHome from "../components/Home";
import Services from "../components/ServicesCard";
import Footer from "../components/Footer";
import Contact from "../components/ContactForm";
import PortfolioSection from "../components/AboutUs";

const Home = () => {
  return (
    <div className="overflow-x-hidden"> {/* Prevent horizontal overflow */}
      <MainHome />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Better padding control */}
        <Services />
        <PortfolioSection />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;