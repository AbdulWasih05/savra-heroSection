import type { CSSProperties } from "react";

type Bar = { width: string; opacity: number };

type FloatingCard = {
  key: string;
  posClass: string;
  position: CSSProperties;
  gradient: string;
  shadow: string;
  bars: Bar[];
  label: string;
  labelColor: string;
  labelAlign: "left" | "right";
};

const CARDS: FloatingCard[] = [
  {
    key: "tl",
    posClass: "savra-card-tl",
    position: { top: "12%", left: "-1%", width: "clamp(120px,15vw,180px)", transform: "rotate(-13deg)" },
    gradient: "linear-gradient(160deg,#DCE9FF,#C9DBFF)",
    shadow: "0 18px 40px rgba(80,110,200,0.20)",
    bars: [
      { width: "70%", opacity: 0.75 },
      { width: "90%", opacity: 0.55 },
      { width: "55%", opacity: 0.55 },
    ],
    label: "Student analytics",
    labelColor: "#4A6BC4",
    labelAlign: "left",
  },
  {
    key: "tr",
    posClass: "savra-card-tr",
    position: { top: "30%", right: "0%", width: "clamp(115px,14vw,170px)", transform: "rotate(11deg)" },
    gradient: "linear-gradient(160deg,#E4DBFF,#CDBEFF)",
    shadow: "0 18px 40px rgba(124,92,214,0.22)",
    bars: [
      { width: "60%", opacity: 0.75 },
      { width: "85%", opacity: 0.55 },
      { width: "50%", opacity: 0.55 },
    ],
    label: "NEP-based lesson plans",
    labelColor: "#7C5CD6",
    labelAlign: "right",
  },
  {
    key: "bl",
    posClass: "savra-card-bl",
    position: { bottom: "3%", left: "-1%", width: "clamp(118px,14.5vw,175px)", transform: "rotate(9deg)" },
    gradient: "linear-gradient(160deg,#FFD5E4,#FBB9D1)",
    shadow: "0 18px 40px rgba(214,92,140,0.22)",
    bars: [
      { width: "65%", opacity: 0.8 },
      { width: "88%", opacity: 0.6 },
      { width: "48%", opacity: 0.6 },
    ],
    label: "Gamified quizzes",
    labelColor: "#C0577F",
    labelAlign: "left",
  },
  {
    key: "br",
    posClass: "savra-card-br",
    position: { bottom: "5%", right: "-1%", width: "clamp(120px,15vw,180px)", transform: "rotate(-10deg)" },
    gradient: "linear-gradient(160deg,#FFDCC2,#FDBE96)",
    shadow: "0 18px 40px rgba(214,130,60,0.22)",
    bars: [
      { width: "72%", opacity: 0.8 },
      { width: "92%", opacity: 0.6 },
      { width: "58%", opacity: 0.6 },
    ],
    label: "Question papers",
    labelColor: "#C77A3C",
    labelAlign: "right",
  },
];

function Card({ card }: { card: FloatingCard }) {
  return (
    <div
      className={`savra-card ${card.posClass} absolute`}
      style={card.position}
    >
      <div
        className="rounded-2xl p-[clamp(10px,1.2vw,14px)]"
        style={{ background: card.gradient, boxShadow: card.shadow }}
      >
        {card.bars.map((bar, i) => (
          <div
            key={i}
            className="rounded-[4px]"
            style={{
              height: "8px",
              width: bar.width,
              background: `rgba(255,255,255,${bar.opacity})`,
              marginBottom: i < card.bars.length - 1 ? "7px" : 0,
            }}
          />
        ))}
      </div>
      <div
        className="savra-card-lbl mt-2 font-[family-name:var(--font-poppins)] font-bold"
        style={{
          fontSize: "clamp(10px,0.9vw,12px)",
          color: card.labelColor,
          textAlign: card.labelAlign,
          paddingLeft: card.labelAlign === "left" ? "6px" : undefined,
          paddingRight: card.labelAlign === "right" ? "6px" : undefined,
        }}
      >
        {card.label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="savra-hero relative flex min-h-[calc(100vh-70px)] flex-col items-center justify-center overflow-hidden px-[clamp(16px,4vw,40px)] py-[clamp(24px,3vw,40px)] text-center">
      {/* Floating decorative cards */}
      <div className="savra-cards pointer-events-none absolute inset-0">
        {CARDS.map((card) => (
          <Card key={card.key} card={card} />
        ))}
      </div>

      {/* Hero content */}
      <div className="savra-hero-inner relative z-[1] mx-auto flex max-w-[1200px] flex-col items-center gap-[clamp(10px,1.6vw,18px)]">
        <h1 className="m-0 font-[family-name:var(--font-poppins)] font-extrabold uppercase leading-[0.96] tracking-[-0.01em]">
          <span
            className="savra-h-line1 block whitespace-nowrap tracking-[0.02em]"
            style={{ fontSize: "clamp(28px,6.2vw,80px)" }}
          >
            <span style={{ color: "#0F0B1F" }}>Your AI </span>
            <span
              className="savra-accent"
              style={{ color: "#6D4AE0", textShadow: "3px 3px 0 #C4B0FF" }}
            >
              Teaching
            </span>
          </span>
          <span
            className="savra-h-line2 block"
            style={{
              fontSize: "clamp(52px,12.5vw,168px)",
              color: "#6D4AE0",
              textShadow: "5px 5px 0 #C4B0FF, 10px 10px 0 rgba(196,176,255,0.35)",
            }}
          >
            Companion
          </span>
        </h1>

        <p
          className="m-0 font-[family-name:var(--font-poppins)] font-semibold leading-[1.1] text-savra-dark"
          style={{ fontSize: "clamp(20px,3.4vw,40px)" }}
        >
          Built for Indian Classrooms
        </p>

        <p
          className="mx-auto my-[clamp(2px,0.6vw,6px)] mb-[clamp(6px,1vw,12px)] max-w-[560px] leading-[1.5] text-savra-ink-2"
          style={{ fontSize: "clamp(15px,1.6vw,19px)" }}
        >
          Plan lessons, build assessments and spin up gamified quizzes in seconds,
          every output aligned to{" "}
          <strong className="font-bold text-savra-dark">CBSE</strong> &amp;{" "}
          <strong className="font-bold text-savra-dark">NEP 2020</strong>, and
          tailored to your classroom.
        </p>

        <a
          href="#"
          className="inline-block rounded-[14px] bg-savra-dark px-8 py-[15px] font-semibold text-white no-underline shadow-[0_12px_30px_rgba(20,16,36,0.22)]"
          style={{ fontSize: "clamp(15px,1.7vw,17px)" }}
        >
          Get Started For Free
        </a>
      </div>
    </section>
  );
}
