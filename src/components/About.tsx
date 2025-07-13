import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "JavaScript", "Next.js",
    "Tailwind CSS", "GraphQL", "MongoDB", "PostgreSQL", "AWS", "Docker"
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Your Current Company",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      title: "Software Developer",
      company: "Previous Company",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies."
    },
    {
      title: "Junior Developer",
      company: "First Company",
      period: "2019 - 2020",
      description: "Started my journey in software development, focusing on frontend technologies."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About Me
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer who loves creating beautiful and functional 
              applications that solve real-world problems.
            </p>
          </div>

          {/* Bio */}
          <div className="mb-16">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 5 years of experience in software development, I specialize in 
                  building scalable web applications using modern technologies. I'm passionate 
                  about clean code, user experience, and continuous learning. When I'm not coding, 
                  you can find me exploring new technologies, contributing to open source projects, 
                  or sharing knowledge with the developer community.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                      <span className="text-accent font-medium">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;