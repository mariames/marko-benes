import Footer from "@/components/Footer";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import Wizard from "@/components/Wizard";
import MainNavbar from "@/components/MainNavbar";
export default function Home() {
  return (
    <>
    <MainNavbar />
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start lg:items-center mx-auto">
        
        <Services />
        <Wizard />
        <Logos />
        
        </main>
      </div>
      <Footer />
    </>
  );
}
