import { Link } from "react-router-dom";
import { HOME } from "../../utils/routes";

function Logo() {
  return (
    <Link
      to={HOME}
      className="flex flex-col justify-center items-center uppercase text-white"
    >
      <h1 className="text-4xl">
        Game<span className="text-main-red font-bold">Grid</span>
      </h1>
      <p className="text-xs tracking-[.15em]">Gaming news and blog</p>
    </Link>
  );
}

export default Logo;
