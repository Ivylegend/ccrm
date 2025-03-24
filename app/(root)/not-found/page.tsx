"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NotFound = () => {
  const location = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location
    );
  }, [location]);

  // Common pages that users might be looking for
  const suggestedPages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-50 p-4 rounded-full">
              <AlertTriangle className="h-16 w-16 text-ccrm-yellow animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-ccrm-blue mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            We&apos;re sorry, but the page you&apos;re looking for ({location})
            doesn&apos;t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              className="bg-ccrm-blue hover:bg-ccrm-blue/90 text-white gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} />
              Go Back
            </Button>

            <Link href="/">
              <Button
                variant="outline"
                className="gap-2 border-ccrm-blue text-ccrm-blue hover:bg-ccrm-blue/10"
              >
                <Home size={18} />
                Return to Home
              </Button>
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="gap-2 text-gray-600 hover:text-ccrm-blue"
                >
                  <Search size={18} />
                  Find Pages
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Popular Pages</DialogTitle>
                  <DialogDescription>
                    These might be what you&apos;re looking for:
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  {suggestedPages.map((page) => (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-2">
            <p className="text-sm text-gray-500">
              If you believe this is an error, please{" "}
              <Link href="/contact" className="text-ccrm-blue hover:underline">
                contact us
              </Link>{" "}
              and let us know.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
