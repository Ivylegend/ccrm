import React from "react";
import { Button } from "@/components/ui/button";

const NewsletterSignup = () => {
  return (
    <section className="py-16 px-6 bg-ccrm-blue text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xl text-white/80 mb-6">
              Subscribe to receive updates about new resources, upcoming events,
              and children's ministry insights.
            </p>
          </div>
          <div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border rounded-lg focus:outline-none"
                required
              />
              <Button className="bg-ccrm-yellow text-ccrm-blue hover:bg-white transition-all duration-300 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            <p className="text-white/60 text-sm mt-3">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
