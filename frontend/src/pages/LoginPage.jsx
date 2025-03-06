import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="bg-[#181A1B]">
      <Header />
      <main>
        <Breadcrumbs title="Login" />
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}
export default LoginPage;
