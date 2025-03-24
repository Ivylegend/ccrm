"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const PaymentProcessors = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedProcessor, setSelectedProcessor] = useState<string | null>(
    null
  );
  const [paymentApiKey, setPaymentApiKey] = useState("pk_test_example"); // Default value

  useEffect(() => {
    const storedKey = localStorage.getItem("PAYMENT_API_KEY");
    if (storedKey) {
      setPaymentApiKey(storedKey);
    }
  }, []);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || parseInt(amount) < 100) {
      toast("Please enter a valid donation amount.");
      return;
    }

    if (!name || !email) {
      toast("Please provide your name and email address.");
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast("Payment initiation simulated");
    }, 1500);

    // In a real implementation, this would redirect to PayStack or Flutterwave
    console.log({
      processor: selectedProcessor,
      amount,
      name,
      email,
      apiKey: paymentApiKey,
    });
  };

  const formatAmount = (val: string) => {
    if (!val) return "";
    return `₦${parseInt(val).toLocaleString()}`;
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-4">
            Online Payment Options
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make a secure online donation.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Donation Amount (₦)
                    </label>
                    <Input
                      id="amount"
                      value={amount}
                      onChange={handleAmountChange}
                      className="text-lg font-semibold"
                      placeholder="Enter amount in Naira"
                    />
                    {amount && (
                      <p className="mt-1 text-sm text-gray-500">
                        {formatAmount(amount)}
                      </p>
                    )}
                  </div>

                  <Separator />

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">
                      Select Payment Method
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        type="button"
                        variant={
                          selectedProcessor === "paystack"
                            ? "default"
                            : "outline"
                        }
                        className="h-16"
                        onClick={() => setSelectedProcessor("paystack")}
                      >
                        <div className="text-center">
                          <p className="font-semibold">PayStack</p>
                        </div>
                      </Button>

                      <Button
                        type="button"
                        variant={
                          selectedProcessor === "flutterwave"
                            ? "default"
                            : "outline"
                        }
                        className="h-16"
                        onClick={() => setSelectedProcessor("flutterwave")}
                      >
                        <div className="text-center">
                          <p className="font-semibold">Flutterwave</p>
                        </div>
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-ccrm-blue hover:bg-ccrm-blue/90 text-white"
                    disabled={!selectedProcessor || isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Proceed to Payment"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PaymentProcessors;
