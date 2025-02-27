import Banner from "../components/Banner";
import Footer from "../components/footer/Footer";

function HomePage() {
  return (
    <div className="bg-[#181A1B]">
      <Banner />
      <main>
        <div className="p-4">
          <h3 className="text-2xl mb-4">Main Content</h3>
          {Array.from({ length: 25 }, (_, i) => (
            <p key={i} className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum tincidunt quam, a venenatis erat interdum eget.
            </p>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
