"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    setSending(true); setStatus(""); setFailed(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "Your message could not be sent. Please try again.");
      form.reset();
      setStatus("Your message has been sent to the ministry. Thank you for getting in touch.");
    } catch (error) {
      setFailed(true);
      setStatus(error instanceof Error ? error.message : "Unable to send. Please email ccrmjuly2022@gmail.com.");
    } finally { setSending(false); }
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-glass">
      <h2 className="text-2xl font-display font-bold text-ccrm-blue mb-6">
        Send Us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6" aria-busy={sending}>
        <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
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
              maxLength={120}
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
              maxLength={254}
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
            maxLength={200}
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
            maxLength={5000}
            rows={5}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ccrm-blue/50 focus:border-ccrm-blue transition-colors resize-none"
            placeholder="Please write your message here..."
          ></textarea>
        </div>

        <div>
          <Button
            type="submit"
            disabled={sending}
            className="w-full bg-ccrm-blue text-white hover:bg-ccrm-lightBlue transition-all duration-300"
          >
            <Send size={16} className="mr-2" />
            {sending ? "Sending…" : "Send Message"}
          </Button>
        </div>
        {status && <p role={failed ? "alert" : "status"} className={failed ? "text-red-700" : "text-green-700"}>{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
