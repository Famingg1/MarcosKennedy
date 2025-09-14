import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Todo: remove mock functionality - implement real form submission
    console.log('Form submission:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        location: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'marcos@weekndtribute.com',
      link: 'mailto:marcos@weekndtribute.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Available Worldwide',
      link: null
    },
    {
      icon: 'fas fa-clock',
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  const socialLinks = [
    {
      platform: 'Instagram',
      icon: 'fab fa-instagram',
      url: '#',
      color: 'hover:text-pink-500'
    },
    {
      platform: 'YouTube',
      icon: 'fab fa-youtube',
      url: '#',
      color: 'hover:text-red-500'
    },
    {
      platform: 'TikTok',
      icon: 'fab fa-tiktok',
      url: '#',
      color: 'hover:text-white'
    },
    {
      platform: 'Spotify',
      icon: 'fab fa-spotify',
      url: '#',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Book Your Event
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-destructive mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-contact-description">
            Ready to bring The Weeknd experience to your event? Get in touch for availability, 
            custom quotes, and booking information.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-300 mb-2">
                        Event Date
                      </label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        data-testid="input-event-date"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-2">
                        Event Type
                      </label>
                      <Input
                        id="eventType"
                        name="eventType"
                        type="text"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        placeholder="Wedding, Corporate, Birthday, etc."
                        data-testid="input-event-type"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                        Event Location
                      </label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, State/Country"
                        data-testid="input-location"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your event, expected audience size, venue details, and any special requirements..."
                      rows={5}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                    data-testid="button-submit-form"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-primary text-lg w-6">
                      <i className={item.icon}></i>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{item.title}</div>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-white hover:text-primary transition-colors"
                          data-testid={`link-contact-${index}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white" data-testid={`text-contact-${index}`}>
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-white">Follow on Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center justify-center p-3 bg-card-border rounded-lg transition-colors ${social.color} hover-elevate`}
                      data-testid={`link-social-${social.platform.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`${social.platform} clicked`);
                      }}
                    >
                      <i className={`${social.icon} text-xl mr-2`}></i>
                      <span className="text-sm">{social.platform}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-gradient-to-br from-primary/20 to-destructive/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl text-primary mb-3">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Quick Response
                </h3>
                <p className="text-gray-300 text-sm">
                  All inquiries are answered within 24 hours. For urgent requests, 
                  please call directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}