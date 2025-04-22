
import { GlobeIcon } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="problem" className="bg-gray-50 py-20">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">The Climate Challenge</h2>
          <p className="section-subtitle">
            Individual carbon footprints add up to a significant environmental impact,
            but most people don't know how their daily choices affect the planet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <GlobeIcon className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Invisible Impact</h3>
                  <p className="text-muted-foreground">
                    The carbon footprint of everyday activities remains largely invisible, 
                    making it difficult for individuals to understand their environmental impact.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary h-6 w-6">
                    <path d="m9 9-1.5 1.5" /><path d="M9.5 5.5 11 7" /><path d="M5.5 9.5 7 11" />
                    <path d="M10 13.5a3.5 3.5 0 0 0-3.5-3.5" /><path d="M7 16.8V22" /><path d="M11.5 21l1.5-5" />
                    <path d="M17 16.8V22" /><path d="M22 19s-1.8-2.8-5.5-2.8c-3.8 0-5.5 2.8-5.5 2.8" /><path d="M18 2v4" />
                    <path d="M20 4h-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lack of Personalized Solutions</h3>
                  <p className="text-muted-foreground">
                    Generic environmental advice doesn't account for individual lifestyles, 
                    making sustainable choices seem impractical or irrelevant.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary h-6 w-6">
                    <path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" />
                    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Decision Paralysis</h3>
                  <p className="text-muted-foreground">
                    When faced with too many options or complex environmental information, 
                    many people struggle to take concrete action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Environmental impact" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-red-500">
                      <path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 10h18" />
                      <path d="M10 14h4" /><rect width="18" height="18" x="3" y="4" rx="2" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-800">Carbon Footprint</h4>
                </div>
                <p className="text-sm text-gray-600">The average person creates 16 tons of CO₂ annually—4X what's sustainable for the planet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
