import Hero from "./component/hero/Hero";
import "./App.css";
import Programs from "./component/programs/Programs";
import Reason from "./component/reasons/Reason";
import Plans from "./component/plans/Plans";
import Testimonial from "./component/testimonials/Testimonial";
import Join from "./component/join/Join";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonial />
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
