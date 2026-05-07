import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import ultimateTicTacToe from '@/assets/ultimate-tictactoe.png';
import ecommerceProject from '@/assets/ecommerce-project.png';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const animationRef = useScrollAnimation();
  const projects = [
    {
      title: 'Ultimate TicTacToe 9x9',
      description: 'An advanced implementation of the classic TicTacToe game with a twist - featuring a 3x3 grid where each cell contains another TicTacToe game. Built with modern frontend technologies for an engaging user experience.',
      image: ultimateTicTacToe,
      technologies: ['Node.js', 'Nuxt.js', 'CSS', 'Bootstrap', 'Socket.io'],
      features: [
        'Interactive game logic with nested grids',
        'Responsive design for all devices',
        'Real-time game state management',
        'Modern UI with smooth animations'
      ],
      githubLink: 'https://github.com/brij-mandaliya/tic-tac-toe',
      liveLink: '#'
    },
    {
      title: 'E-commerce Website',
      description: 'A full-featured e-commerce platform with complete shopping functionality. Includes product catalog, shopping cart, user authentication, and payment integration for a complete online shopping experience.',
      image: ecommerceProject,
      technologies: ['Laravel', 'PHP', 'JavaScript', 'HTML', 'CSS'],
      features: [
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'User authentication and profiles',
        'Admin panel for inventory management'
      ],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6" ref={animationRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications showcasing my development skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover:glow-effect transition-all duration-300 overflow-hidden animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <CardHeader>
                <CardTitle className="gradient-text">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {project.githubLink !== "#" && (
                  <div className="flex gap-3 pt-4">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {/* <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:opacity-90"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button> */}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto animate-on-scroll" style={{animationDelay: '0.4s'}}>
            <h3 className="text-xl font-semibold gradient-text mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and improving my skills.
              Check back regularly for updates or follow my progress on GitHub.
            </p>
            <Button asChild className="bg-gradient-primary text-light border-2 hover:text-black hover:opacity-90">
              <a
                href="https://github.com/brij-mandaliya?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View All Repositories
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
