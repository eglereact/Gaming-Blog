import { Link } from "react-router-dom";
import { socialLinks } from "../../utils/socialLinks";
import { FaPhoneAlt, FaRegUser } from "react-icons/fa";

function TopHeader() {
  return (
    <div className="bg-transparent p-4 flex max-w-7xl mx-auto border-b-[0.5px] border-gray-300 justify-between items-center">
      <div className="flex gap-6">
        <p className="flex gap-4 items-center">
          <FaPhoneAlt className="text-main-red" />{" "}
          <span className="text-white">Call: </span>
          <a href="/" className="text-main-gray hover:text-white smooth-hover">
            +(123)-6418-8990
          </a>
        </p>
        <div className="flex gap-2 items-center ">
          <FaRegUser className="text-main-red" />
          <Link to="/" className="text-main-gray hover:text-white smooth-hover">
            Login
          </Link>
          <Link to="/" className="text-main-gray hover:text-white smooth-hover">
            Registration
          </Link>
        </div>
      </div>
      <div className="flex space-x-4">
        {socialLinks.map(({ id, link, icon }) => (
          <a
            key={id}
            href={link}
            aria-label="social link"
            className="text-main-gray hover:text-white smooth-hover"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
export default TopHeader;
