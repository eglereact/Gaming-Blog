import Header from "./Header";

function Banner() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4219883/pexels-photo-4219883.jpeg')`,
      }}
    >
      <Header />
      <div className="absolute inset-0 flex justify-center mt-16 lg:ml-34 items-left text-white flex-col">
        <div className=" p-10 rounded-lg w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl">Article about game</h1>
          <p className=" mt-4 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            cupiditate soluta repudiandae architecto. Exercitationem
            reprehenderit ratione dolorem quis ut sequi? Laudantium autem unde,
            harum aut mollitia odit omnis ex suscipit!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
