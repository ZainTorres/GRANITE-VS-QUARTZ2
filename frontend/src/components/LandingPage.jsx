import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { ContactModal } from './ContactModal';
import { 
  CheckCircle, 
  AlertTriangle, 
  Star, 
  Phone, 
  MapPin, 
  Clock,
  Hammer,
  Award,
  Users,
  Zap,
  Shield,
  Sparkles,
  Quote,
  ChevronRight,
  Facebook,
  Instagram,
  Mail
} from 'lucide-react';
import { 
  heroContent, 
  comparisonData, 
  comparisonTable, 
  useCases, 
  faqData, 
  testimonials, 
  serviceAreas,
  companyInfo 
} from '../mockData';

export const LandingPage = () => {
  const [activeToggle, setActiveToggle] = useState('granite');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const FloatingCTA = () => (
    <div className="fixed bottom-6 right-6 z-50">
      <ContactModal
        trigger={
          <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold px-6 py-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none">
            <Phone className="w-4 h-4 mr-2" />
            Get Free Quote
          </Button>
        }
      />
    </div>
  );

  const Header = () => (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">{companyInfo.name}</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#comparison" className="text-gray-700 hover:text-pink-500 transition-colors">Compare</a>
          <a href="#usecases" className="text-gray-700 hover:text-pink-500 transition-colors">Use Cases</a>
          <a href="#faq" className="text-gray-700 hover:text-pink-500 transition-colors">FAQ</a>
          <a href="#testimonials" className="text-gray-700 hover:text-pink-500 transition-colors">Reviews</a>
          <a href="#service-areas" className="text-gray-700 hover:text-pink-500 transition-colors">Service Areas</a>
        </nav>
        
        <ContactModal
          trigger={
            <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold px-6 py-2 rounded-xl">
              Get Quote
            </Button>
          }
        />
      </div>
    </header>
  );

  const Hero = () => (
    <section className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Granite vs Quartz
                </span>
                <br />
                Countertops: Which is Best for Your{' '}
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Kansas City Kitchen?
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {heroContent.subtitle}
              </p>
              <p className="text-lg text-gray-500">
                {heroContent.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactModal
                trigger={
                  <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold px-8 py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Compare Now
                  </Button>
                }
              />
              <Button variant="outline" className="px-8 py-4 rounded-xl text-lg border-2 border-gray-300 hover:border-pink-500 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                {companyInfo.phone}
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">1000+ Happy Customers</span>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-12">
            <Card className="bg-white/60 backdrop-blur-lg border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Comparison</h3>
                  <p className="text-gray-600">Toggle between materials</p>
                </div>
                
                <div className="bg-gray-100 p-1 rounded-2xl mb-6">
                  <div className="grid grid-cols-2 gap-1">
                    <Button
                      variant={activeToggle === 'granite' ? 'default' : 'ghost'}
                      onClick={() => setActiveToggle('granite')}
                      className={`rounded-xl py-3 font-semibold transition-all duration-300 ${
                        activeToggle === 'granite'
                          ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Natural Granite
                    </Button>
                    <Button
                      variant={activeToggle === 'quartz' ? 'default' : 'ghost'}
                      onClick={() => setActiveToggle('quartz')}
                      className={`rounded-xl py-3 font-semibold transition-all duration-300 ${
                        activeToggle === 'quartz'
                          ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Engineered Quartz
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {comparisonData[activeToggle].title}
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-green-700 mb-2">✓ Advantages</p>
                      {comparisonData[activeToggle].pros.slice(0, 3).map((pro, index) => (
                        <div key={index} className="flex items-start space-x-2 mb-1">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{pro}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-orange-700 mb-2">⚠ Considerations</p>
                      {comparisonData[activeToggle].cons.slice(0, 2).map((con, index) => (
                        <div key={index} className="flex items-start space-x-2 mb-1">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  const ComparisonSection = () => (
    <section id="comparison" className="py-20 bg-gray-50" data-animate>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Detailed <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Granite vs Quartz</span> Comparison
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make an informed decision with our comprehensive comparison of both materials
          </p>
        </div>

        <div className="overflow-x-auto mb-12">
          <div className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-pink-500 to-violet-500">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Comparison Factor</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Granite</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Quartz</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.categories.map((category, index) => (
                  <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                    <td className="px-6 py-4 font-medium text-gray-900">{category.name}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{category.granite}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{category.quartz}</td>
                    <td className="px-6 py-4 text-center">
                      {category.winner === 'granite' && (
                        <Badge className="bg-orange-100 text-orange-800 font-semibold">Granite</Badge>
                      )}
                      {category.winner === 'quartz' && (
                        <Badge className="bg-purple-100 text-purple-800 font-semibold">Quartz</Badge>
                      )}
                      {category.winner === 'tie' && (
                        <Badge className="bg-gray-100 text-gray-800 font-semibold">Tie</Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(comparisonData).map(([key, material]) => (
            <Card key={key} className="bg-white/60 backdrop-blur-lg border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{material.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Advantages
                    </h4>
                    <ul className="space-y-2">
                      {material.pros.map((pro, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-orange-700 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Considerations
                    </h4>
                    <ul className="space-y-2">
                      {material.cons.map((con, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const UseCasesSection = () => (
    <section id="usecases" className="py-20" data-animate>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Which Material is Right for <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Your Situation?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best choice based on your specific kitchen needs and lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-lg border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    useCase.bestChoice === 'granite' ? 'bg-orange-100' : 'bg-purple-100'
                  }`}>
                    {index === 0 && <Users className={`w-8 h-8 ${useCase.bestChoice === 'granite' ? 'text-orange-500' : 'text-purple-500'}`} />}
                    {index === 1 && <Award className={`w-8 h-8 ${useCase.bestChoice === 'granite' ? 'text-orange-500' : 'text-purple-500'}`} />}
                    {index === 2 && <Shield className={`w-8 h-8 ${useCase.bestChoice === 'granite' ? 'text-orange-500' : 'text-purple-500'}`} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600 mt-2">{useCase.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className={`p-4 rounded-xl ${
                    useCase.bestChoice === 'granite' ? 'bg-orange-50 border border-orange-200' : 'bg-purple-50 border border-purple-200'
                  }`}>
                    <p className={`font-semibold ${useCase.bestChoice === 'granite' ? 'text-orange-800' : 'text-purple-800'}`}>
                      Best Choice: {useCase.bestChoice === 'granite' ? 'Granite' : 'Quartz'}
                    </p>
                    <p className={`text-sm mt-1 ${useCase.bestChoice === 'granite' ? 'text-orange-700' : 'text-purple-700'}`}>
                      {useCase.reason}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const FAQSection = () => (
    <section id="faq" className="py-20 bg-gray-50" data-animate>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about granite and quartz countertops in Kansas City
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/60 backdrop-blur-lg rounded-2xl border-0 shadow-lg px-6 py-2"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-pink-500 transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <ContactModal
            trigger={
              <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-300">
                Ask Our Experts
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );

  const TestimonialsSection = () => (
    <section id="testimonials" className="py-20" data-animate>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Kansas City</span> Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from satisfied customers across the Kansas City metro area
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/60 backdrop-blur-lg border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-pink-500 mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-4">{testimonial.text}</p>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {testimonial.location}
                      </p>
                    </div>
                    <Badge className={`${
                      testimonial.material === 'Granite' 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'bg-purple-100 text-purple-800'
                    } font-semibold`}>
                      {testimonial.material}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const ServiceAreaSection = () => (
    <section id="service-areas" className="py-20 bg-gray-50" data-animate>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serving the Greater <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Kansas City Area</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional countertop installation across Kansas City metro from our Olathe location
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-white/60 backdrop-blur-lg border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Service Areas</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                      <MapPin className="w-4 h-4 text-pink-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-50 to-violet-50 rounded-xl border border-pink-100">
                    <Zap className="w-6 h-6 text-pink-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Free In-Home Consultation</p>
                      <p className="text-sm text-gray-600">We come to you with samples and measurements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-50 to-violet-50 rounded-xl border border-pink-100">
                    <Hammer className="w-6 h-6 text-pink-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Professional Installation</p>
                      <p className="text-sm text-gray-600">Expert fabrication at our Olathe facility</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            {/* Custom Kansas City Service Area Map */}
            <Card className="bg-white/60 backdrop-blur-lg border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Kansas City Metro Coverage</h3>
                  <p className="text-gray-600">30-mile radius from our Olathe location</p>
                </div>
                
                <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 aspect-square">
                  {/* Central Olathe Location */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full animate-pulse"></div>
                    <p className="text-xs font-semibold text-gray-900 mt-1 text-center">Olathe</p>
                  </div>
                  
                  {/* Service Radius Circle */}
                  <div className="absolute inset-4 border-2 border-pink-300 rounded-full opacity-60"></div>
                  <div className="absolute inset-8 border border-pink-200 rounded-full opacity-40"></div>
                  
                  {/* Key Cities */}
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <p className="text-xs text-gray-700 mt-1">Kansas City</p>
                  </div>
                  
                  <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <p className="text-xs text-gray-700 mt-1">Overland Park</p>
                  </div>
                  
                  <div className="absolute bottom-1/3 left-1/4 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <p className="text-xs text-gray-700 mt-1">Shawnee</p>
                  </div>
                  
                  <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2 translate-y-1/2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <p className="text-xs text-gray-700 mt-1">Lee's Summit</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Coverage Area:</strong> 30-mile radius including Johnson County, Jackson County, and surrounding areas
                  </p>
                  <ContactModal
                    trigger={
                      <Button variant="outline" className="border-2 border-pink-300 text-pink-700 hover:bg-pink-50">
                        Check Service Availability
                      </Button>
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Kansas City's premier destination for granite and quartz countertops. 
              Expert installation, competitive pricing, and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Granite Countertops Kansas City</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quartz Countertops Olathe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kitchen Remodeling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Countertop Installation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Olathe, KS</li>
              <li>Overland Park, KS</li>
              <li>Kansas City, MO</li>
              <li>Shawnee, KS</li>
              <li>Lee's Summit, MO</li>
              <li>Lenexa, KS</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-500" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-500" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-pink-500" />
                <span>{companyInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 {companyInfo.name}. All rights reserved. | Professional countertop installation in Kansas City metro.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ComparisonSection />
      <UseCasesSection />
      <FAQSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};