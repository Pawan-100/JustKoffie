import { useState, useEffect, memo, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import coffeeMachine from './assets/images/Coffee Machine and Cup.jpg'
import coffeeStall from './assets/images/Coffee Stall.jpg'
import { menuItems } from './data/menuData'
import { GiCoffeeBeans, GiCoffeePot } from 'react-icons/gi'
import { FaLeaf, FaInstagram, FaFacebookF, FaTwitter, FaMapMarkerAlt, FaClock, FaCoffee } from 'react-icons/fa'
import { IoMdFlame } from 'react-icons/io'
import OptimizedImage from './components/OptimizedImage'
import LoadingSkeleton from './components/LoadingSkeleton'
import MenuCard from './components/MenuCard'
import FeatureCard from './components/FeatureCard'

function App() {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }, [])

  const features = useMemo(() => [
    {
      icon: GiCoffeeBeans,
      title: 'Premium Beans',
      description: 'Hand-selected beans from the finest coffee regions worldwide'
    },
    {
      icon: IoMdFlame,
      title: 'Expert Roasting',
      description: 'Small-batch roasting to bring out unique flavor profiles'
    },
    {
      icon: GiCoffeePot,
      title: 'Skilled Baristas',
      description: 'Trained professionals crafting each cup with care'
    },
    {
      icon: FaLeaf,
      title: 'Sustainable',
      description: 'Ethically sourced and environmentally conscious practices'
    }
  ], [])

  const galleryImages = useMemo(() => [
    'https://images.unsplash.com/photo-1453614512568-c4024d13c247',
    'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    'https://images.unsplash.com/photo-1532713107108-dfb5d8d2fc42',
    'https://images.unsplash.com/photo-1507915135761-41a0a222c709',
    'https://images.pexels.com/photos/302887/pexels-photo-302887.jpeg'
  ], [])

  return (
    <div className="bg-coffee-50">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-coffee-800 shadow-lg' : 'bg-transparent'
        }`}
        data-testid="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-serif font-bold text-coffee-50" data-testid="brand-logo">
                Just Koffie
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'menu', 'location', 'gallery', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-coffee-50 hover:text-coffee-200 capitalize transition-colors font-medium ${
                    activeSection === item ? 'text-coffee-200' : ''
                  }`}
                  data-testid={`nav-${item}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1675306408031-a9aad9f23308)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-testid="hero-section"
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-coffee-50 mb-6 text-shadow-strong" data-testid="hero-title">
            Just Koffie
          </h1>
          <p className="text-2xl md:text-3xl text-coffee-100 mb-8 text-shadow-strong" data-testid="hero-subtitle">
            Where Every Cup Tells a Story
          </p>
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            data-testid="hero-cta-button"
          >
            Explore Our Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white" data-testid="about-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold text-coffee-800 mb-6" data-testid="about-title">
                Our Story
              </h2>
              <p className="text-lg text-coffee-700 mb-4 leading-relaxed">
                Just Koffie was born from a simple passion: to serve exceptional coffee that brings people together. Every bean is carefully selected, every cup is crafted with love, and every customer becomes part of our growing family.
              </p>
              <p className="text-lg text-coffee-700 mb-4 leading-relaxed">
                We believe coffee is more than just a beverage—it's an experience, a ritual, and a moment of joy in your day. From the first sip to the last drop, we're dedicated to making that moment perfect.
              </p>
              <p className="text-lg text-coffee-700 leading-relaxed">
                Our baristas are artists, our beans are our canvas, and your satisfaction is our masterpiece.
              </p>
            </div>
            <div className="relative">
              <OptimizedImage 
                src={coffeeMachine} 
                alt="Coffee Machine" 
                className="rounded-lg shadow-2xl hover-scale"
                data-testid="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-coffee-100" data-testid="features-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-coffee-800 text-center mb-16" data-testid="features-title">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-white" data-testid="menu-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-coffee-800 text-center mb-4" data-testid="menu-title">
            Our Menu
          </h2>
          <p className="text-center text-coffee-600 text-lg mb-16">
            Discover our carefully curated selection of coffee beverages
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Location Section */}
      <section id="location" className="py-20 px-4 bg-coffee-800" data-testid="location-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-serif font-bold mb-6" data-testid="location-title">
                Visit Our Coffee Shop
              </h2>
              <p className="text-xl text-coffee-200 mb-6 leading-relaxed">
                Step into a world where coffee meets community. Our welcoming storefront has been serving the neighborhood with exceptional coffee and warm hospitality.
              </p>
              <p className="text-lg text-coffee-200 mb-6 leading-relaxed">
                Whether you're grabbing your morning brew or settling in for an afternoon of work, our cozy atmosphere and expertly crafted beverages make Just Koffie the perfect destination.
              </p>
              <div className="space-y-4 text-coffee-100">
                <div className="flex items-center gap-3 text-lg">
                  <FaMapMarkerAlt className="text-2xl text-coffee-300" />
                  <span>Come visit us and experience the difference</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <FaClock className="text-2xl text-coffee-300" />
                  <span>Open daily from 7 AM to 8 PM</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <FaCoffee className="text-2xl text-coffee-300" />
                  <span>Fresh coffee, friendly faces, fantastic vibes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage 
                src={coffeeStall} 
                alt="Just Koffie Coffee Shop Exterior" 
                className="rounded-lg shadow-2xl hover-scale w-full h-auto"
                data-testid="location-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-coffee-100" data-testid="gallery-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-coffee-800 text-center mb-16" data-testid="gallery-title">
            Coffee Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-lg hover-scale"
                data-testid={`gallery-image-${index}`}
              >
                <OptimizedImage 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-coffee-800 text-white" data-testid="contact-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold mb-8" data-testid="contact-title">
            Visit Us Today
          </h2>
          <p className="text-xl text-coffee-200 mb-12">
            Experience the perfect cup at Just Koffie. Follow us on social media for updates and special offers!
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="#" 
              className="text-4xl hover:text-coffee-300 transition-colors"
              data-testid="social-instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="#" 
              className="text-4xl hover:text-coffee-300 transition-colors"
              data-testid="social-facebook"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="#" 
              className="text-4xl hover:text-coffee-300 transition-colors"
              data-testid="social-twitter"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
          <p className="text-coffee-200">
            © 2024 Just Koffie. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
