import { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import profileImage from '@/assets/profile-hero.jpg';
import profileImage from '@/assets/portfolio_hero.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Software Engineer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // This would typically link to an actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would upload this file to public folder
    link.download = 'Software_Engineer_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative tech-grid">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm a{' '}
                <span className="gradient-text">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Passionate about creating innovative solutions with modern technologies. 
                Specializing in full-stack development and automation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToAbout}
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-white px-8 py-3"
              >
                Learn More About Me
              </Button>
              <Button 
                variant="outline" 
                onClick={downloadResume}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
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

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden glow-effect">
                <img 
                  src={profileImage} 
                  alt="Software Engineer Profile" 
                  className="w-full h-half object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={scrollToAbout} className="text-muted-foreground hover:text-white transition-colors">
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;