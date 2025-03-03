import { Link } from "react-router-dom";
import FormInput from "./FormInput";

function RegistrationForm() {
  return (
    <div className="max-w-7xl m-auto p-20">
      <form>
        <FormInput label="Name" subLabel="first" type="text" />
        <FormInput subLabel="last" type="text" />
        <FormInput label="email" type="email" />
        <FormInput label="username" type="text" />
        <FormInput label="password" type="password" />
        <FormInput label="confirm password" type="password" />
        <button className="bg-main-red px-10 py-3 mt-3 uppercase text-white font-semibold hover:text-main-red hover:bg-white smooth-hover">
          Register
        </button>
      </form>
      <div className="text-main-gray flex gap-1 mt-10">
        <Link to="/" className="hover:text-main-red smooth-hover">
          Log In
        </Link>
        <span>|</span>
        <Link to="/" className="hover:text-main-red smooth-hover">
          Lost Password
        </Link>
      </div>
    </div>
  );
}
export default RegistrationForm;
