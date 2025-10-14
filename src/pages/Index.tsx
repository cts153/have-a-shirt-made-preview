import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { ArrowRight, Shirt, Scissors, Sparkles, Users } from "lucide-react";
import heroImage from "@/assets/hero-apparel.jpg";

const Index = () => {
  const features = [
    {
      icon: Shirt,
      title: "Custom Vinyl Printing",
      description: "High-quality vinyl transfers that last through countless washes and games.",
    },
    {
      icon: Scissors,
      title: "Professional Embroidery",
      description: "Precision embroidery for a premium, professional look that stands out.",
    },
    {
      icon: Users,
      title: "Team Catalogs",
      description: "Dedicated team portals with custom pricing and easy ordering for your entire squad.",
    },
    {
      icon: Sparkles,
      title: "Custom Designs",
      description: "Work with our design team to create unique apparel that represents your team's identity.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Custom Apparel for
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Champions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional vinyl printing and embroidery services for teams that demand excellence. 
              From design to delivery, we've got your team covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog">
                <Button size="lg" variant="hero" className="w-full sm:w-auto">
                  Browse Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/team-access">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Team Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Teams Choose PrintPro
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional quality, competitive pricing, and dedicated support for your team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-primary-foreground overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Outfit Your Team?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get started with your team's custom catalog today. No minimums, competitive pricing, 
                and quick turnaround times.
              </p>
              <Link to="/auth">
                <Button size="lg" variant="secondary">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="font-bold text-2xl bg-gradient-hero bg-clip-text text-transparent mb-4">
            PrintPro
          </div>
          <p className="text-muted-foreground">
            Professional custom apparel printing and embroidery services
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
