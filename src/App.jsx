import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/features";
import CallToAction from "./components/callToAction";
import Team from "./components/team";
import Services from "./components/services";
import Appointment from "./components/appointment";
import Testomonials from "./components/testimonial";
import NewsLetter from "./components/newsletter";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CallToAction/>
      <Team/>
      <Services/>
      <Appointment/>
      <Testomonials/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
