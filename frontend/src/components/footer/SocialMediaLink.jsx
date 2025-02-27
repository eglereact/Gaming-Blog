function SocialMediaLink({ icon, link }) {
  return (
    <a
      href={link}
      className="group relative inline-flex items-center gap-2 cursor-pointer text-main-gray hover:bg-main-red hover:text-white smooth-hover bg-white/30 p-3"
    >
      <span className="relative h-6 w-6 overflow-hidden">
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
          {icon}
        </span>
        <span className="absolute inset-0 flex items-center justify-center translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          {icon}
        </span>
      </span>
    </a>
  );
}
export default SocialMediaLink;
