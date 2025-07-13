import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "C++", "IPSec", "Networking", "Embedded C", "Docker", "5G Core",
    "Cloud Native", "Kubernetes", "Packet Core", "SFT", "IKEv1", "IKEv2"
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Wipro Limited",
      period: "Oct 2023 - Present",
      description: "IPSec Protocol Adaptation and Active-Active Tunnel Redundancy implementation. Proficient in networking fundamentals and cloud platform migration."
    },
    {
      title: "Project Engineer",
      company: "Wipro Limited",
      period: "Apr 2022 - Oct 2023",
      description: "Implemented robust testing strategies, increased test coverage by 50%, and designed key features like SFT for IPsec testing."
    },
    {
      title: "Bachelor of Technology",
      company: "Manipal Institute Of Technology",
      period: "Jul 2018 - Aug 2022",
      description: "Electronics And Instrumentation - Gained experience with sensors, embedded systems, automation, and control systems."
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
                  Highly motivated engineer with a strong track record of delivering results in networking 
                  and cloud technologies. Proven team player known for going the extra mile to ensure 
                  project success. Specialized in IPSec protocols, network migration, and cloud-based 
                  solutions with expertise in 5G Core technologies and Kubernetes orchestration.
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