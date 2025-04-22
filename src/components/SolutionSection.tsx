
import { Leaf, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section id="solution" className="py-20">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Our Solution</h2>
          <p className="section-subtitle">
            GreenTalk is an AI assistant that makes sustainable living easy by providing
            personalized insights and actionable recommendations based on your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-6 z-10 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">GreenTalk Assistant</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Personalized Carbon Tracking</h4>
                      <p className="text-sm text-muted-foreground">
                        Automatically track your carbon footprint from travel, electricity usage, and shopping habits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Smart Recommendations</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive tailored suggestions for eco-friendly alternatives that fit your lifestyle and preferences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Progress Visualization</h4>
                      <p className="text-sm text-muted-foreground">
                        See the actual impact of your sustainable choices with easy-to-understand metrics and visualizations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Community Connection</h4>
                      <p className="text-sm text-muted-foreground">
                        Connect with like-minded individuals and see the collective impact of sustainable choices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">30%</p>
                    <p className="text-xs text-muted-foreground">Average Carbon Reduction</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">$720</p>
                    <p className="text-xs text-muted-foreground">Yearly Savings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">93%</p>
                    <p className="text-xs text-muted-foreground">User Satisfaction</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-xl -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-primary/10 rounded-xl -z-20"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">How GreenTalk Works</h3>
              <p className="text-muted-foreground mb-6">
                Our AI assistant analyzes your daily activities and provides real-time insights
                and suggestions to help you live more sustainably without sacrificing convenience.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Connect Your Accounts</h4>
                  <p className="text-sm text-muted-foreground">
                    Securely link your transportation, utility, and shopping accounts to get a complete picture of your environmental impact.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Receive Personalized Insights</h4>
                  <p className="text-sm text-muted-foreground">
                    GreenTalk analyzes your habits and identifies opportunities for sustainable improvements specific to your lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Act on Smart Recommendations</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose from suggested eco-friendly alternatives that match your preferences and budget constraints.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Track Your Progress</h4>
                  <p className="text-sm text-muted-foreground">
                    Watch your carbon footprint decrease over time and see the positive environmental and financial impact of your choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
