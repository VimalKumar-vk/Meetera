import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import { GradientWave } from "../components/ui/GradientWave.jsx";

export default function Home() {

  const navigate = useNavigate();

  return (
    <>
    <Header/>
    {/* <GradientSelector/> */}
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950">

      <GradientWave
        colors={[
          "#020617",
          "#1d4ed8",
          "#38bdf8",
          "#020617",
        ]}
      
      />
      
      {/* Main Content */}
      <div className="relative z-10 px-6 text-center text-white">

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Connect Without Limits
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
          High-quality video meetings.
          Connect with anyone, anywhere.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700" onClick={()=> navigate("/new")}>
            New Meeting
          </button>

          <button className="rounded-lg border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10" onClick={()=> navigate("/join")}>
            Join Meeting
          </button>

        </div>
      </div>
    </main>
    </>
  );
}