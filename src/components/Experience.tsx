import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Code, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'Client Projects',
      title: 'Full-Stack Developer',
      company: 'Freelance & Contract Work',
      period: '12/2024 - Present',
      location: 'Improwised Technologies Pvt. Ltd., Rajkot',
      description: 'Developed and delivered custom software solutions for various clients, focusing on web applications and automation tools.',
      achievements: [
        'Successfully delivered multiple client projects on time and within budget',
        'Working job and queue processing systems using AWS services',
        'Hands-on experience in containerizing applications using Docker',
        'Created automated tasks using Zapier for business process optimization',
        'Collaborated directly with clients to understand requirements and provide technical solutions'
      ],
      technologies: ['Laravel', 'Python', 'Scrapy', 'Vue.js', 'PHP', 'JavaScript', 'AWS', 'Zapier'],
      icon: Users
    },
    {
      type: 'Training & Development',
      title: 'Software Engineering Trainee',
      company: 'Professional Development Program',
      period: '6/2024 - 12/2024',
      location: 'Improwised Technologies Pvt. Ltd., Rajkot',
      description: 'Comprehensive training program covering full-stack development, modern frameworks, and industry best practices.',
      achievements: [
        'Contributed to BookStack open-source project on GitHub (Laravel-based)',
        'Completed intensive full-stack development curriculum',
        'Built multiple projects using modern technologies',
        'Learned industry-standard development practices and methodologies',
        'Gained expertise in both frontend and backend technologies'
      ],
      technologies: ['JavaScript', 'Java', 'HTML/CSS', 'Database Design'],
      icon: Code
    },
    {
      type: 'Training & Development',
      title: 'Laravel Trainee',
      company: 'Professional Development Program',
      period: '1/2024 - 3/2024',
      location: 'MNS Pvt. LTD., Rajkot',
      description: 'Completed a full-stack development training program with hands-on experience through a CRM project based on real industry use cases.',
      achievements: [
        'Completed intensive full-stack development curriculum',
        'Learned industry-standard development practices and methodologies',
        'Gained expertise in both frontend and backend technologies'
      ],
      technologies: ['JavaScript', 'Bootstrap', 'HTML/CSS', 'Laravel'],
      icon: Code
    }
  ];

  const skills = [
    'Problem Solving',
    'Client Communication',
    'Project Management',
    'Code Review',
    'Technical Documentation'
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            2 year of combined training and real-world project experience in software development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card hover:glow-effect transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <exp.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">{exp.type}</Badge>
                      <CardTitle className="gradient-text">{exp.title}</CardTitle>
                      <p className="text-lg font-medium text-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{exp.description}</p>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Skills */}
        <div className="glass-card rounded-xl p-8">
          <h3 className="text-2xl font-semibold gradient-text mb-6 text-center">
            Professional Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center space-x-3 p-3 rounded-lg bg-card/50">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold gradient-text mb-4">Experience Summary</h3>
            <p className="text-muted-foreground text-lg">
              My journey as a software engineer has been marked by continuous learning and practical application. 
              Through intensive training and real client work, I've developed a strong foundation in full-stack 
              development while gaining valuable experience in project delivery and client communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;