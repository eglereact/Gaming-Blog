import { FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-stone-950">
      <nav className=" m-auto max-w-7xl px-20 h-80 flex justify-center gap-6 flex-col">
        <h1 className="text-white capitalize text-5xl font-bold">{title}</h1>
        <ul className="flex text-black items-center">
          <li>
            <Link
              to="/"
              className="hover:text-gray-200 mr-2 text-main-gray smooth-hover"
            >
              Home
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={to} className="flex items-center gap-2 text-white">
                <FaChevronRight size={12} />
                {isLast ? (
                  <span className="capitalize">
                    {decodeURIComponent(value)}
                  </span>
                ) : (
                  <Link to={to} className="text-blue-500 hover:underline">
                    {decodeURIComponent(value)}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
