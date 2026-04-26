import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Brij Mandaliya</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Passionate about creating innovative solutions with modern technologies. 
              Specializing in full-stack development and automation.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Brij-Mandaliya" target="_blank">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-primary/20 transition-all duration-200">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://in.linkedin.com/in/brij-mandaliya-801659180" target="_blank">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-primary/20 transition-all duration-200">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:brijsoni7@gmail.com">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hover:bg-primary/20 transition-all duration-200">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: brijsoni7@gmail.com</p>
              <p>Phone: +91 757 4994 864</p>
              <p>Location: Rajkot, Gujarat, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear} Brij Mandaliya.</span>
            </div>
            
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Back to Top ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;