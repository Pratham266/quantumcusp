import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SiLinkedin } from "react-icons/si";
import { teamMembers } from "@/lib/data";
import "./Team.css";

export default function Team() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Team - Meet the Experts | QuantumCusp</title>
        <meta 
          name="description" 
          content="Meet the QuantumCusp leadership team. Decades of experience in technology, business strategy, and digital innovation driving custom software solutions." 
        />
        <link rel="canonical" href="https://quantumcusp.co/team" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quantumcusp.co/team" />
        <meta property="og:title" content="Our Team - Meet the Experts | QuantumCusp" />
        <meta property="og:description" content="Meet the QuantumCusp leadership team. Decades of experience in technology, business strategy, and digital innovation." />
        <meta property="og:image" content="https://quantumcusp.co/LogoDark.svg" />
        <meta property="og:site_name" content="QuantumCusp" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team - Meet the Experts | QuantumCusp" />
        <meta name="twitter:description" content="Meet the QuantumCusp leadership team. Decades of experience in technology, business strategy, and digital innovation." />
        <meta name="twitter:image" content="https://quantumcusp.co/LogoDark.svg" />
      </Helmet>
      
      <Navigation />
      <main className="pt-20">
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="team-header text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Team
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                QuantumCusp <span className="text-primary">Team</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Our leadership team brings together decades of experience in
                technology, business strategy, and digital innovation.
              </p>
            </div>

            <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={member.id} className="team-card">
                  <Card
                    className="h-full"
                    data-testid={`card-team-member-${index}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar className="w-16 h-16">
                          <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-primary text-sm font-medium">
                            {member.role}
                          </p>
                        </div>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            className="w-9 h-9 rounded-md bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                            data-testid={`link-linkedin-${index}`}
                          >
                            <SiLinkedin className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

