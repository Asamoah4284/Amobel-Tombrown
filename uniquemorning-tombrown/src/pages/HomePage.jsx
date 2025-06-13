import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import MoreThanExpectedSection from '../components/MoreThanExpectedSection'
import ProductSection from '../components/ProductSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import PopularDishesSection from '../components/PopularDishesSection'
import ContactSection from '../components/ContactSection'
import HomeAppliancesSection from '../components/HomeAppliancesSection'

const HomePage = () => {
  return (
    <div className="">
      <Header />
      {/* Overlay wrapper for Hero and MoreThanExpected sections */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Diagonal Brown Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '110%', // Adjust as needed
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <HeroSection />
          <MoreThanExpectedSection />
        </div>
      </div>
      {/* <ProductSection /> */}
      <PopularDishesSection />
      <HomeAppliancesSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  )
}

export default HomePage 