"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log("Form submitted");
    // You could add toast notification here
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-glass">
      <h2 className="text-2xl font-display font-bold text-ccrm-blue mb-6">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ccrm-blue/50 focus:border-ccrm-blue transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ccrm-blue/50 focus:border-ccrm-blue transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ccrm-blue/50 focus:border-ccrm-blue transition-colors"
            placeholder="How can we help you?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ccrm-blue/50 focus:border-ccrm-blue transition-colors resize-none"
            placeholder="Please write your message here..."
          ></textarea>
        </div>

        <div>
          <Button
            type="submit"
            className="w-full bg-ccrm-blue text-white hover:bg-ccrm-lightBlue transition-all duration-300"
          >
            <Send size={16} className="mr-2" />
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
