import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['JavaScript', 'Vue.js', 'Nuxt.js', 'HTML', 'CSS', 'Bootstrap', 'SASS', 'React'],
      color: 'from-tech-purple to-primary'
    },
    {
      title: 'Backend Development', 
      skills: ['Laravel', 'PHP', 'Python', 'Java', 'Node.js', 'Express.js', 'Socket.io', 'REST APIs'],
      color: 'from-tech-blue to-primary'
    },
    {
      title: 'Database & Cloud', 
      skills: ['MySQL', 'PostgreSQL', 'Firebase', 'Redis', 'AWS', 'Drizzle ORM'],
      color: 'from-tech-purple to-primary'
    },
    {
      title: 'Devops & Tools',
      skills: ['Docker', 'Postman', 'Git / Github', 'Ngnix', 'Linux', 'Zapier', 'VS Code'],
      color: 'from-tech-blue to-primary'
    },
    {
      title: 'AI Tools',
      skills: ['Microsoft Copilot', 'Chatgpt / Codex', 'Claude Code', 'Gemini CLI', 'Opencode', 'OpenRouter Models'],
      color: 'from-tech-purple to-primary'
    }
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover:glow-effect transition-all duration-300">
              <CardHeader>
                <CardTitle className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={`${skill}-${skillIndex}`} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Skills Cloud */}
        <div className="glass-card rounded-xl p-8">
          <h3 className="text-2xl font-semibold gradient-text mb-6 text-center">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, index) => (
              <Badge 
                key={skill}
                variant="secondary" 
                className={`
                  px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors duration-200 cursor-default
                  ${index % 3 === 0 ? 'hover:glow-effect' : ''}
                `}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold gradient-text mb-4">Experience Level</h3>
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">2 Year</span> of hands-on experience with both training environments and real client projects.
              Continuously expanding knowledge through practical application and staying current with industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
