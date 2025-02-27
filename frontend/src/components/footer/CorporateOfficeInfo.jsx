import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

function CorporateOfficeInfo() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.trim()) {
      setError("Email cannot be empty.");
    } else {
      setError(""); // Clear error if valid
      console.log("Email submitted:", email);
    }
  };

  return (
    <section className="text-white font-semibold flex flex-col gap-4 ">
      <h2>
        Phone:{" "}
        <span className="text-main-gray font-normal">+(123)-6418-8990</span>
      </h2>
      <h2>
        Email:{" "}
        <span className="text-main-gray font-normal">info@gamegrid.com</span>
      </h2>
      <h2>
        Office Address:{" "}
        <span className="text-main-gray">
          29 Street, Kaunas City, Lithuania # 34 Road, House #10.
        </span>
      </h2>
      <div className="flex mt-4">
        <input
          className="bg-[#2d2d2d] h-12 pl-4 font-normal max-w-full outline-none focus:ring-0 focus:ring-main-red"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-main-red h-12 w-12 flex justify-center items-center smooth-hover hover:bg-white hover:text-main-red"
          onClick={handleSubmit}
        >
          <FaChevronRight />
        </button>
      </div>

      {error && (
        <p className="text-main-red font-l text-sm font-light -mt-2 ">
          {error}
        </p>
      )}
    </section>
  );
}

export default CorporateOfficeInfo;
