import React from "react";

import HeroHeader from "@/components/HeroHeader";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import NewsletterSignup from "@/components/NewsletterSignup";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log("Form submitted");
    // You could add toast notification here
  };

  return (
    <>
      <HeroHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions, requests, or to get involved."
        backgroundImage="https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
        height="min-h-[400px]"
      />

      {/* Contact Information and Form */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ContactInfo />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <MapSection /> */}

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </>
  );
};

export default Contact;
