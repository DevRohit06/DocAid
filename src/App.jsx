import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/features";
import CallToAction from "./components/callToAction";
import Team from "./components/team";
import Services from "./components/services";
import Appointment from "./components/appointment";
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
    </>
  );
}

export default App;
