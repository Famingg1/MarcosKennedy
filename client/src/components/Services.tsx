import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Private Events",
      icon: "fas fa-users",
      duration: "1-2 Hours",
      features: [
        "Full Weeknd tribute performance",
        "Professional sound system",
        "Custom lighting setup",
        "Meet & greet available",
        "Flexible setlist options"
      ],
      popular: false
    },
    {
      title: "Corporate Events",
      icon: "fas fa-building",
      duration: "2-3 Hours",
      features: [
        "Premium production value",
        "Extended performance time",
        "Professional staging",
        "Custom branding options",
        "VIP hospitality included"
      ],
      popular: true
    },
    {
      title: "Venue Shows",
      icon: "fas fa-music",
      duration: "Full Show",
      features: [
        "Complete concert experience",
        "Full band option available",
        "Professional production team",
        "Marketing support",
        "Revenue sharing available"
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      icon: "fas fa-users-cog",
      title: "Full Band",
      description: "Complete live band experience with professional musicians"
    },
    {
      icon: "fas fa-lightbulb",
      title: "Premium Lighting",
      description: "Advanced lighting design to match The Weeknd's concert aesthetic"
    },
    {
      icon: "fas fa-camera",
      title: "Photography",
      description: "Professional event photography to capture the performance"
    },
    {
      icon: "fas fa-handshake",
      title: "Meet & Greet",
      description: "Personal interaction and photo opportunities with guests"
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Performance Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-destructive mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-services-description">
            Professional Weeknd tribute performances tailored to your event needs. 
            From intimate gatherings to large venue shows.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative hover-elevate ${service.popular ? 'border-primary border-2' : ''}`}
              data-testid={`card-service-${index}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-4xl text-primary mb-4">
                  <i className={service.icon}></i>
                </div>
                <CardTitle className="text-xl text-white" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </CardTitle>
                <div className="text-gray-400 text-sm mt-2" data-testid={`text-service-duration-${index}`}>
                  {service.duration}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-gray-300"
                      data-testid={`text-service-feature-${index}-${featureIndex}`}
                    >
                      <i className="fas fa-check text-primary mr-3 text-sm"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={scrollToContact}
                  className="w-full"
                  variant={service.popular ? "default" : "outline"}
                  data-testid={`button-book-service-${index}`}
                >
                  <i className="fas fa-calendar-plus mr-2"></i>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">
            Available Add-ons
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`card-addon-${index}`}>
                <CardContent className="p-6">
                  <div className="text-2xl text-primary mb-3">
                    <i className={addon.icon}></i>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2" data-testid={`text-addon-title-${index}`}>
                    {addon.title}
                  </h4>
                  <p className="text-gray-400 text-sm" data-testid={`text-addon-description-${index}`}>
                    {addon.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-destructive/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Book?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your event and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-destructive hover:from-primary/90 hover:to-destructive/90"
              data-testid="button-get-quote"
            >
              <i className="fas fa-envelope mr-2"></i>
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = 'tel:+31612345678'}
              data-testid="button-call-now"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}