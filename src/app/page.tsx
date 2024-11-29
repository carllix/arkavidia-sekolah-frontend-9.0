import Countdown from "@/components/Countdown";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const faqData = [
  {
    question: "Apa itu Competitive Programming?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum saepe ipsa excepturi. Quo veniam provident ipsa nisi reprehenderitquasi non dolorum deleniti ea deserunt, optio iste. Pariatur velitmaiores cum.",
  },
  {
    question: "Apa saja syarat peserta Competitive Programming?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum saepe ipsa excepturi. Quo veniam provident ipsa nisi reprehenderitquasi non dolorum deleniti ea deserunt, optio iste. Pariatur velitmaiores cum.",
  },
  {
    question: "Apakah kompetisi ini diadakan secara berkelompok?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum saepe ipsa excepturi. Quo veniam provident ipsa nisi reprehenderitquasi non dolorum deleniti ea deserunt, optio iste. Pariatur velitmaiores cum.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-yellow-500 min-h-screen">
      {/* Description */}
      <div className="relative flex flex-col items-center mt-44 px-10">
        <Image
          src="/LogoCP.svg"
          alt="Logo CP"
          width={100}
          height={100}
          className="absolute -top-16"
        />
        <div className="bg-white w-full max-w-xl flex flex-col gap-3 items-center text-center px-8 pt-12 pb-8 rounded-md">
          <h1 className="text-lg font-bold">Competitive Programming</h1>
          <h3 className="text-sm text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            saepe ipsa excepturi. Quo veniam provident ipsa nisi reprehenderit
            quasi non dolorum deleniti ea deserunt, optio iste. Pariatur velit
            maiores cum.
          </h3>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant={"outline"} className="font-bold">
              Download Guidebook
            </Button>
            <Button variant={"blue"} className="font-bold">
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {/* Close Regist */}
      <div className="relative flex flex-col items-center mt-12 gap-4 bg-black w-full pb-10 pt-2">
        <div className="font-bold text-xl text-center drop-shadow-lg bg-white w-full py-1">
          <h1 className="text-start whitespace-nowrap overflow-hidden">
            CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE
            REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE
            REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE
            REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION
          </h1>
        </div>
        <h2 className="font-bold text-white mt-5">
          Sabtu, 31 Desember 2024 - 23:59 WIB
        </h2>
        <Countdown targetDate={new Date("2024-12-31T23:59:59")} />
        <Image
          src="/disks.svg"
          alt="Disks"
          width={100}
          height={100}
          className="absolute -bottom-20 w-full hidden lg:block"
        />
      </div>

      {/* Prize */}
      <div className="flex flex-col items-center bg-blue-900 w-full">
        <h1 className="mt-12 font-bold text-white text-3xl">PRIZE</h1>
      </div>

      {/* Timeline */}
      <div className="flex flex-col items-center gap-6 pb-8">
        <h1 className="mt-12 font-bold text-3xl">TIMELINE</h1>
        <Countdown targetDate={new Date("2025-01-31T07:00:00")} />
      </div>

      {/* FAQ */}
      <div className="flex flex-col items-center gap-6 pb-8 w-full px-10">
        <h1 className="mt-12 font-bold text-3xl">F.A.Q.</h1>
        <FAQ faqData={faqData} />
      </div>
    </div>
  );
}
