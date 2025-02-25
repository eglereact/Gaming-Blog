import BannerArticle from "./BannerArticle";
import Header from "./header/Header";

function Banner() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1346154/pexels-photo-1346154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <Header />
      <BannerArticle />
    </div>
  );
}
export default Banner;
