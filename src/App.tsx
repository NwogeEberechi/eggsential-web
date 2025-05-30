import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhatsAppButton from "./components/WhatsAppButton";
export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
      </main>
      <WhatsAppButton />
    </div>
  );
}
