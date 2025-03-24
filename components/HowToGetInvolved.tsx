const HowToGetInvolved = () => {
  return (
    <div className="flex my-20">
      <div className="bg-[#0A1768] w-full p-10">
        <h3
          className="relative bg-[#fdbf00] text-[#0A1768] p-2 px-4 rounded-md w-fit font-semibold text-lg 
                after:content-[''] after:absolute after:-bottom-2 after:right-4 after:border-8 
                after:border-transparent after:border-t-[#fdbf00]"
        >
          How You Can Get Involved
        </h3>
        <ul className="list-decimal text-white my-5 space-y-4">
          <li>
            <strong>Volunteering:</strong> You can serve as a volunteer in any
            of our programmes (daily, weekly, fortnightly or monthly basis). You
            can also volunteer your professional services.
          </li>
          <li>
            <strong>Prayer Partner:</strong> You can join our weekly WhatsApp
            prayer meetings on Mondays (18:00 WAT).
          </li>
          <li>
            <strong>Financial Partner:</strong> Send in regular financial
            support.
          </li>
          <li>
            <strong>Donor:</strong> You can donate materials, gift items,
            equipment, properties, etc.
          </li>
          <li>
            <strong>Invitation:</strong> You can invite us to reach the children
            in your community.
          </li>
          <li>
            <strong>Patron:</strong> You can serve as a patron of CCRM on
            recommendation.
          </li>
        </ul>
      </div>

      <div className="bg-white w-full p-10 flex flex-col space-y-5 items-center text-center shadow-md">
        <h3 className="bg-[#0A1768] text-white p-2 px-4 rounded-full font-semibold text-lg">
          For Donations and Support
        </h3>
        <div className="space-y-5">
          <div>
            <p className="font-bold text-[#0A1768]">Account Name:</p>
            <p className="font-semibold">
              Children&apos;s Creative Resource Ministry
            </p>
          </div>
          <div>
            <p className="font-bold text-[#0A1768]">Bank:</p>
            <p className="font-semibold">UBA</p>
          </div>
          <div>
            <p className="font-bold text-[#0A1768]">Account Number:</p>
            <p className="font-semibold">2301170538</p>
          </div>
          <p className="font-semibold">Kindly specify the donation&apos;s purpose</p>
        </div>
      </div>
    </div>
  );
};

export default HowToGetInvolved;
