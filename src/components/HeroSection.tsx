
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background circles */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute left-0 bottom-1/3 w-64 h-64 bg-primary/10 rounded-full filter blur-2xl opacity-30 -z-10"></div>
      
      <div className="container-section flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Live Sustainably with <span className="text-primary">GreenTalk</span> AI Assistant
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Track your carbon footprint, get personalized eco-friendly alternatives, and make a 
            positive impact on the environment with your everyday choices.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#problem" className="btn-primary flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get Started
            </a>
          </div>
        </div>
        <div className="flex-1 relative z-10">
          <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 shadow-lg">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white font-bold">G</span>
                  </div>
                  <h3 className="font-semibold text-lg">GreenTalk Assistant</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm">How can I reduce my carbon footprint from my daily commute?</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-sm">Based on your location, I recommend cycling to work 2 days a week. This would reduce your carbon emissions by 26kg CO2 per month and save you $45 in fuel costs!</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm">That sounds great! Can you add this goal to my tracking?</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <p className="text-sm">Goal added! I'll check in with you weekly on your progress. You can also connect this with your calendar to get reminders on cycling days.</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 border-t pt-4">
                  <input type="text" placeholder="Ask GreenTalk something..." className="w-full p-2 rounded-lg bg-gray-100 text-sm" />
                  <button className="p-2 rounded-lg bg-primary text-white">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 h-full w-full bg-gradient-to-br from-secondary to-primary rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
