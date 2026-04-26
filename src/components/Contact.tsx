import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'brijsoni7@gmail.com',
      link: 'mailto:brijsoni7@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7574994864',
      link: 'tel:+917574994864'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Rajkot, Gujarat, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      url: 'https://github.com/Brij-Mandaliya',
      username: 'BrijMandaliya@developer'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      url: 'https://in.linkedin.com/in/brij-mandaliya-801659180',
      username: 'brij-mandaliya'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="gradient-text">Send Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project discussion, collaboration, etc."
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help you..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="gradient-text">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="gradient-text">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-card/50 transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-gradient-primary p-2 rounded-lg group-hover:glow-effect transition-all">
                      <social.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{social.title}</h4>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold gradient-text mb-2">Available for Work</h3>
                <p className="text-muted-foreground text-sm">
                  Currently accepting new projects and collaborations. 
                  Let's build something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;