import { Cpu, Scale, Users, Sparkles } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: "Offline Talent Assessment",
      description: "AI models run locally on your device - no internet needed for analysis",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Scale,
      title: "Fair & Unbiased",
      description: "Data-driven evaluation removes human bias and ensures every athlete gets a fair shot",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Users,
      title: "For ALL Athletes",
      description: "Rural or urban, beginner or pro - accessible to everyone across India",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Sparkles,
      title: "AI Coach",
      description: "Get personalized training plans that adapt to your progress and goals",
      gradient: "from-primary/20 to-secondary/5",
    },
  ];

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What do you get?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to discover and nurture sports talent
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone Mockup */}
          <div className="flex justify-center lg:justify-start animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-3xl" />
              <img 
                src={phoneMockup} 
                alt="DeshRan App Features" 
                className="relative z-10 w-64 md:w-72 lg:w-80 drop-shadow-2xl"
              />
            </div>
          </div>
          
          {/* Right - Features List */}
          <div className="space-y-6 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-x-2 animate-slide-up flex gap-6 items-start"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${feature.gradient} min-w-16 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
