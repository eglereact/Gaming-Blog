import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import LostPasswordFrom from "../components/LostPasswordForm";

function LostPasswordPage() {
  return (
    <div className="bg-[#181A1B]">
      <Header />
      <main>
        <Breadcrumbs title="Lost Password" />
        <LostPasswordFrom />
      </main>
      <Footer />
    </div>
  );
}
export default LostPasswordPage;
