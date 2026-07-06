import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div
      className="w-full max-w-full overflow-x-hidden bg-savra-bg text-savra-ink font-[family-name:var(--font-dm-sans)] min-h-screen"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(90,60,180,0.20) 1.2px, transparent 1.3px)",
        backgroundSize: "24px 24px",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}
