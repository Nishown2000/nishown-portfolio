import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nishown2000@gmail.com",
      href: "mailto:nishown2000@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9110240061",
      href: "tel:+919110240061"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Moodbidri, Karnataka",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just 
                  want to say hello, I'd love to hear from you. Feel free to reach 
                  out through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <a 
                        href={item.href}
                        className="text-primary font-medium hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Button variant="gradient" size="lg" className="w-full group">
                  <Mail size={20} />
                  Send me an email
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-primary mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="Project Collaboration" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-primary mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      rows={5}
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                  
                  <Button type="submit" variant="default" size="lg" className="w-full group">
                    <Send size={20} />
                    Send Message
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;