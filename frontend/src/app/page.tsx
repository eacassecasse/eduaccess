import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import CourseList from "@/app/components/courseList";
import SignIn from "@/app/pages/sign-in";


export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <CourseList/>
      </main>
      <Footer />
    </>
  );
}
