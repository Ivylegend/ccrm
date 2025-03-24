import React from "react";
import DonationOptions from "@/components/DonationOptions";
import AccountDetails from "@/components/AccountDetails";
import HeroHeader from "@/components/HeroHeader";
import PaymentProcessors from "@/components/PaymentProcessors";
import DonationImpact from "@/components/DonationImpact";

const Donate = () => {
  return (
    <>
      <HeroHeader
        title="Support Our Mission"
        subtitle="Your generosity makes a lasting impact on children's education across Nigeria."
        backgroundImage="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
        buttonText="Donate Now"
        buttonLink="#donation-options"
        height="min-h-[500px]"
      />

      {/* Donation Options */}
      <DonationOptions />

      {/* Local Account Details */}
      <AccountDetails />

      {/* Payment Processors */}
      <PaymentProcessors />

      {/* Impact of Donations */}
      <DonationImpact />
    </>
  );
};

export default Donate;
