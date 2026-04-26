import { Code, Zap, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in both frontend and backend technologies with modern frameworks'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Experienced in Zapier automation and task optimization for efficient workflows'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Delivered real projects with clients, understanding business requirements'
    },
    {
      icon: Trophy,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices in software development'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate software engineer with 2 year of hands-on experience in training and real client projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold gradient-text">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a dedicated Software Engineer with a passion for creating innovative solutions 
                that make a difference. My journey started with curiosity about how things work 
                behind the scenes, which led me to dive deep into programming and software development.
              </p>
              <p>
                Over the past year, I've gained valuable experience through intensive training programs 
                and real-world client projects. This combination has given me both theoretical knowledge 
                and practical skills in building scalable, efficient applications.
              </p>
              <p>
                I specialize in full-stack development with a strong focus on modern frameworks 
                and automation tools. My goal is to write clean, maintainable code that solves 
                real problems and delivers value to users and businesses.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card hover:glow-effect transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-8">
          <h3 className="text-2xl font-semibold gradient-text mb-6 text-center">What Drives Me</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-2">Problem Solving</h4>
              <p className="text-sm text-muted-foreground">
                I thrive on breaking down complex problems into manageable solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">
                Always looking for creative ways to improve processes and user experiences
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Growth</h4>
              <p className="text-sm text-muted-foreground">
                Committed to continuous learning and staying updated with latest technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;