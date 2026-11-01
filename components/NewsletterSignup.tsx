"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export default function NewsletterSignup() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    setSending(true); setStatus(""); setFailed(false);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "Unable to send your request. Please try again.");
      form.reset();
      setStatus("Your request has been sent to the ministry. The team will follow up about newsletter updates.");
    } catch (error) {
      setFailed(true);
      setStatus(error instanceof Error ? error.message : "Unable to send. Please email ccrmjuly2022@gmail.com.");
    } finally { setSending(false); }
  }
  return (
    <section className="py-16 px-6 bg-ccrm-blue text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-display font-bold mb-4">Request Newsletter Updates</h2>
          <p className="text-xl text-white/80 mb-6">Send the ministry a request to receive updates about resources, upcoming events, and children&apos;s ministry.</p>
        </div>
        <div>
          <form onSubmit={submit} className="flex flex-col gap-4" aria-busy={sending}>
            <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
            <label htmlFor="newsletter-email" className="font-medium">Email address</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input id="newsletter-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="Your email address" className="min-w-0 flex-grow px-4 py-3 border rounded-lg focus:outline-none text-gray-900 bg-white" required />
              <Button disabled={sending} type="submit" className="bg-ccrm-yellow text-ccrm-blue hover:bg-white whitespace-nowrap">{sending ? "Sending…" : "Send Request"}</Button>
            </div>
            {status && <p role={failed ? "alert" : "status"}>{status}</p>}
          </form>
          <p className="text-white/80 text-sm mt-3">Your email address will be sent to the ministry to handle your request.</p>
        </div>
      </div>
    </section>
  );
}
