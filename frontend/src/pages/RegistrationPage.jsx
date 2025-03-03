import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import RegistrationForm from "../components/RegistrationForm";

function RegistrationPage() {
  return (
    <div className="bg-[#181A1B]">
      <Header />
      <main>
        <Breadcrumbs title="Registration" />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
export default RegistrationPage;
