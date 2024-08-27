import Header from "./ui/components/header";
import SignUp from "@/app/ui/pages/sign-up";
import SignIn from "@/app/ui/pages/sign-in";
import Footer from "./ui/components/footer";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 m-auto">
        <SignIn />
      </main>
      <Footer/>
    </>
  );
}
