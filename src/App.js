// App.js
import './App.css';
import ErrorBoundary from './component/ErrorBoundary';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Join from './component/join/Join';
import Plans from './component/plans/Plans';
import Program from './component/program/Program';
import Reason from './component/reasons/Reason';
import Testimonials from './component/Testimonials/Testimonials';

function App() {
  return (
    // <ErrorBoundary>
    <div className="App">
      <Hero />
      <Program />
      <Plans />
      <Reason />
      <Testimonials />
      <Join />
      <Footer />
    </div>
    // </ErrorBoundary>
  );
}

export default App;
