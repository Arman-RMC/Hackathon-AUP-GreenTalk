
import { Code, Database, Globe, Cpu, Lock, CloudSun } from 'lucide-react';

const TechStackSection = () => {
  const technologies = [
    {
      name: "Advanced AI Models",
      description: "Powered by state-of-the-art machine learning algorithms that analyze patterns and make intelligent predictions.",
      icon: Cpu,
    },
    {
      name: "Secure Cloud Infrastructure",
      description: "Enterprise-grade cloud platform ensuring reliability, scalability, and 99.9% uptime.",
      icon: CloudSun,
    },
    {
      name: "RESTful API Integration",
      description: "Seamless connections with transportation, utility, and retail services for accurate carbon tracking.",
      icon: Code,
    },
    {
      name: "Climate Science Database",
      description: "Comprehensive database of climate science research to provide accurate environmental impact assessments.",
      icon: Database,
    },
    {
      name: "Global Emissions Standards",
      description: "Up-to-date information on international emissions standards and environmental regulations.",
      icon: Globe,
    },
    {
      name: "End-to-End Encryption",
      description: "Military-grade encryption ensuring your personal data remains private and secure.",
      icon: Lock,
    },
  ];

  return (
    <section id="tech" className="py-20">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Technology Stack</h2>
          <p className="section-subtitle">
            GreenTalk is built on cutting-edge technology that makes accurate carbon tracking and
            personalized sustainability recommendations possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="p-6 rounded-xl border border-border bg-white hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <tech.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-muted-foreground">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl text-white overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">The Science Behind GreenTalk</h3>
            <p className="mb-8 max-w-3xl mx-auto">
              Our algorithms are developed in collaboration with climate scientists, environmental engineers, 
              and sustainability experts to ensure accurate carbon calculations and effective recommendations.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-4xl font-bold">99.8%</p>
                <p className="text-sm opacity-80">Calculation Accuracy</p>
              </div>
              <div>
                <p className="text-4xl font-bold">100+</p>
                <p className="text-sm opacity-80">API Integrations</p>
              </div>
              <div>
                <p className="text-4xl font-bold">95%</p>
                <p className="text-sm opacity-80">Recommendation Relevance</p>
              </div>
              <div>
                <p className="text-4xl font-bold">5M+</p>
                <p className="text-sm opacity-80">Data Points Analyzed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
