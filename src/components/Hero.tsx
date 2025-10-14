import { Button } from "@/components/ui/button";
import { Smartphone, ArrowRight } from "lucide-react";
import deshranLogo from "@/assets/deshran-logo.png";
import phoneMockup from "@/assets/phone-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      
      {/* Animated Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Logo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <img src={deshranLogo} alt="DeshRan Logo" className="w-32 h-32 md:w-40 md:h-40 animate-float" />
            </div>
            
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Democratizing Sports
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Talent Assessment
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Offline AI-powered talent assessment. Fair, unbiased, and accessible to every athlete across India.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg shadow-2xl shadow-primary/30 group"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download App
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-8 py-6 text-lg"
                asChild
              >
                <a href="https://deshran-ui-6e71e306734c.herokuapp.com/landing" target="_blank" rel="noopener noreferrer">
                  View Demo
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">Offline AI</div>
                <div className="text-sm text-muted-foreground">Works Anywhere</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">Unbiased</div>
                <div className="text-sm text-muted-foreground">Fair Assessment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">For All</div>
                <div className="text-sm text-muted-foreground">Everyone Welcome</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">AI Coach</div>
                <div className="text-sm text-muted-foreground">Personal Plans</div>
              </div>
            </div>
          </div>
          
          {/* Right Phone Mockup */}
          <div className="flex justify-center lg:justify-end items-start animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[3rem] blur-3xl animate-pulse" />
              <img 
                src={phoneMockup} 
                alt="DeshRan App Interface" 
                className="relative z-10 w-64 md:w-72 lg:w-80 drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
