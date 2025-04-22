
import { Mail, Phone, Check } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Get Started Today</h2>
          <p className="section-subtitle">
            Ready to start your sustainability journey? Get in touch with us or sign up for early access
            to GreenTalk and take the first step toward reducing your carbon footprint.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Get Early Access</h3>
              <p className="text-muted-foreground mb-6">
                Join our waitlist and be among the first to experience GreenTalk's personalized sustainability assistant.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="access-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="access-email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">Join Waitlist</button>
              </form>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-muted-foreground">hello@greentalk.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <h4 className="font-medium">How does GreenTalk calculate my carbon footprint?</h4>
              <p className="text-sm text-muted-foreground">
                GreenTalk uses data from your connected accounts and industry-standard emissions factors to calculate your carbon footprint with high accuracy.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Is my personal data secure?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, we use end-to-end encryption and follow strict data protection regulations to ensure your information remains private and secure.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">How much does GreenTalk cost?</h4>
              <p className="text-sm text-muted-foreground">
                GreenTalk offers a free basic plan with limited features and premium plans starting at $4.99/month with added capabilities.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium">Can I use GreenTalk on multiple devices?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, GreenTalk is available on iOS, Android, and as a web application, allowing you to access your sustainability dashboard from any device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
