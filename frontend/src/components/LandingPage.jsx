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
  Sparkles
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ComparisonSection />
      <UseCasesSection />
      <FloatingCTA />
    </div>
  );
};