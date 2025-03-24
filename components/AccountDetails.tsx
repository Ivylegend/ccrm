"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";

const AccountDetails = () => {
  const accounts = [
    {
      bank: "UBA Bank",
      accountName: "Children's Creative Resource Ministry",
      accountNumber: "2301170538",
      branchCode: "221",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-4">
            Local Account Information
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You can make direct transfers to our Nigerian bank accounts to
            support our ministry.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 max-w-4xl mx-auto">
          {accounts.map((account, index) => (
            <Card key={index} className="overflow-hidden hover-lift">
              <div className="bg-ccrm-blue text-white p-4">
                <h3 className="text-xl font-semibold">{account.bank}</h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Account Name</p>
                    <p className="font-medium">{account.accountName}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Account Number</p>
                      <p className="font-mono font-medium text-lg">
                        {account.accountNumber}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(account.accountNumber, "Account number")
                      }
                    >
                      <Copy size={14} className="mr-1" /> Copy
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-gray-600 max-w-2xl mx-auto">
          <p className="text-sm">
            Please kindly specify the donation&apos;s purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccountDetails;
