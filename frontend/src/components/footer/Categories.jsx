import { FaChevronRight } from "react-icons/fa";

function Categories({ item }) {
  return (
    <a
      href={item.link}
      className="relative w-full h-14 overflow-hidden group flex justify-between items-center cursor-pointer mb-2"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`,
        }}
      ></div>

      {/* Text + Arrow Container */}
      <div className="relative flex items-center gap-2 z-10 transition-all duration-300 group-hover:translate-x-2">
        <FaChevronRight className="text-white text-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <h2 className="text-white text-xl font-bold">{item.title}</h2>
      </div>

      {/* Number Box */}
      <div className="z-10 bg-white/20 text-white w-10 h-10 flex items-center justify-center text-lg font-bold transition-colors duration-300 group-hover:bg-main-red group-hover:text-white">
        {item.number}
      </div>
    </a>
  );
}

export default Categories;
