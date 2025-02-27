import { FaRegCalendarAlt } from "react-icons/fa";

function RecentPost() {
  return (
    <section>
      <div className="flex gap-4 mb-4">
        <img
          src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Gaming"
          className="w-28 h-28 object-cover"
        />
        <div>
          <h2 className="flex items-center gap-2">
            <FaRegCalendarAlt size={20} className="text-main-red" />
            <span className="text-main-gray">May 31, 2022</span>
          </h2>
          <a
            href="/"
            className="text-white text-lg font-semibold hover:text-main-red smooth-hover"
          >
            Battle Royale Games: A Global Phenomenon
          </a>
        </div>
      </div>
      <div className="flex gap-4">
        <img
          src="https://images.pexels.com/photos/6498299/pexels-photo-6498299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Gaming"
          className="w-28 h-28 object-cover"
        />
        <div>
          <h2 className="flex items-center gap-2">
            <FaRegCalendarAlt size={20} className="text-main-red" />
            <span className="text-main-gray">May 31, 2022</span>
          </h2>
          <a
            href="/"
            className="text-white text-lg font-semibold hover:text-main-red smooth-hover"
          >
            A roundup of the most anticipated sports games
          </a>
        </div>
      </div>
    </section>
  );
}
export default RecentPost;
