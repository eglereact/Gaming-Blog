import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function RegistrationPage() {
  return (
    <div className="bg-[#181A1B]">
      <Header />
      <main>
        <Breadcrumbs title="Registration" />
      </main>
      <Footer />
    </div>
  );
}
export default RegistrationPage;
