import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left animate-slide-in">
            <div className="space-y-4">
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                Hi, it's me
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                Your Name
                <br />
                <span className="text-accent">Developer</span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl text-muted-foreground">
                  FOUNDER OF YOUR COMPANY
                </p>
                <p className="text-muted-foreground max-w-2xl">
                  Software Developer from Your Location with rock-solid experience
                  in building complex applications with modern technologies.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Mail size={20} />
              </Button>
            </div>

            {/* CTA Button */}
            <div>
              <Button variant="gradient" size="lg" className="group">
                Let's Talk
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full p-1">
                <div className="w-full h-full bg-muted rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-72 h-72 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white text-6xl font-bold">
                    YN
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;