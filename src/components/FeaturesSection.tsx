
import React from 'react';
import { 
  Car, 
  Lightbulb, 
  ShoppingBag, 
  BarChart3, 
  MessageSquare, 
  Clock 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Travel Footprint Tracking",
      description: "Automatically track carbon emissions from your daily commute, business trips, and vacation travels.",
      icon: Car,
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Energy Usage Monitor",
      description: "Connect your utility accounts to monitor electricity consumption and get tips to reduce energy waste.",
      icon: Lightbulb,
      color: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      title: "Sustainable Shopping Guide",
      description: "Analyze your purchases and discover eco-friendly alternatives for your favorite products.",
      icon: ShoppingBag,
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      title: "Impact Dashboard",
      description: "Visualize your carbon reduction journey with detailed charts and environmental impact metrics.",
      icon: BarChart3,
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "24/7 AI Assistant",
      description: "Ask questions about sustainable living and get personalized advice whenever you need it.",
      icon: MessageSquare,
      color: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      title: "Goal Setting & Reminders",
      description: "Set sustainability goals and receive timely reminders to help you stay on track.",
      icon: Clock,
      color: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Powerful Features</h2>
          <p className="section-subtitle">
            GreenTalk comes packed with intelligent features designed to make sustainable living
            effortless and rewarding for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group hover:border-primary/50 transition-colors">
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Ready to reduce your carbon footprint?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of environmentally conscious users who are making a difference
                with GreenTalk's personalized sustainability assistant.
              </p>
              <a href="#contact" className="btn-primary inline-block">Get Started For Free</a>
            </div>
            <div className="bg-primary/10 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center gap-8 mb-6">
                  <div>
                    <p className="text-4xl font-bold text-primary">10K+</p>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary">45K+</p>
                    <p className="text-sm text-muted-foreground">Tons CO₂ Saved</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Join our growing community and be part of the solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
