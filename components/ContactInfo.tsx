import React from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-6">
        Get In Touch
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Whether you have questions about our programs, need resources for your
        children's ministry, or want to get involved, we're here to help.
      </p>

      <div className="space-y-6 mb-8">
        <div className="flex items-start space-x-4">
          <div className="h-12 w-12 rounded-lg bg-ccrm-blue/10 flex items-center justify-center flex-shrink-0">
            <MapPin size={24} className="text-ccrm-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ccrm-blue mb-1">
              Our Location
            </h3>
            <p className="text-gray-600">
              House 43, Road 5, Aho Agbeja Estate,
              <br />
              Ajibode, Ibadan, Oyo State, Nigeria
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="h-12 w-12 rounded-lg bg-ccrm-blue/10 flex items-center justify-center flex-shrink-0">
            <Mail size={24} className="text-ccrm-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ccrm-blue mb-1">
              Email Us
            </h3>
            <p className="text-gray-600">
              General Inquiries:{" "}
              <a
                href="mailto:ccrmjuly2022@gmail.com"
                className="text-ccrm-blue hover:underline"
              >
                ccrmjuly2022@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="h-12 w-12 rounded-lg bg-ccrm-blue/10 flex items-center justify-center flex-shrink-0">
            <Phone size={24} className="text-ccrm-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ccrm-blue mb-1">
              Call Us
            </h3>
            <p className="text-gray-600">
              Main Office: (+234) 704-345-4841
              <br />
              WhatsApp: (+234) 708-492-5570
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
