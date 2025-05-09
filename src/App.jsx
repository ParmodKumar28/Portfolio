import { lazy, Suspense, useState, useEffect } from 'react';
import { Toaster } from "react-hot-toast";
import "./app.css"
import PropTypes from 'prop-types';
import ScrollToTop from "react-scroll-to-top";

// Lazy loading components
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Hero = lazy(() => import('./Components/Hero/Hero'));
const About = lazy(() => import('./Components/About/About'));
const Services = lazy(() => import('./Components/Services/Services'));
const MyWork = lazy(() => import('./Components/MyWork/MyWork'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Education = lazy(() => import('./Components/Education/Education'));
const Youtube = lazy(() => import('./Components/Youtube/Youtube'));

// Custom fallback component
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-text">PARMOD</div>
  </div>
);

// Delay wrapper
const DelayedSuspense = ({ children, delay = 1200 }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return showContent ? children : <LoadingFallback />;
};
DelayedSuspense.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

DelayedSuspense.defaultProps = {
  delay: 1500,
};

// Parent App Functional App Component Rendering Children
const App = () => {
  // Returning JSX
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollToTop smooth top={200} style={{ backgroundColor: "#6c63ff", color: "#fff", }} />
      <DelayedSuspense delay={2000}>
        <Suspense fallback={<LoadingFallback />}>
          <Navbar />
          <Hero />
          <About />
          <Youtube />
          <Education />
          <Services />
          <MyWork />
          <Contact />
          <Footer />
        </Suspense>
      </DelayedSuspense>
    </div>
  );
};

// Exporting App
export default App;