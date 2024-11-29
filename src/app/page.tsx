import Countdown from "@/components/Countdown";
import FAQ from "@/components/FAQ";
import Timeline from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaInstagram, FaLine } from "react-icons/fa";
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

const timelineData = [
  { title: "Registration", date: "27 November 2022" },
  { title: "Close Registration", date: "31 Desember 2022" },
  { title: "Warmup Penyisihan", date: "20 Januari 2023" },
  { title: "Penyisihan", date: "21 Januari 2023" },
  { title: "Pengumuman Finalis", date: "4 Februari 2023" },
  { title: "Pengumuman Finalis", date: "4 Februari 2023" },
  { title: "Pengumuman Finalis", date: "4 Februari 2023" },
  { title: "Pengumuman Finalis", date: "4 Februari 2023" },
  { title: "Pengumuman Finalis", date: "4 Februari 2023" },
  { title: "Pengumuman Finalis", date: "4 Februari 2023" },
  { title: "Pengumuman Finalis", date: "4 Februari 2023" },
];

const prizeData = [
  { title: "Juara 1", value: "Rp 7.000.000,-" },
  { title: "Juara 2", value: "Rp 5.000.000,-" },
  { title: "Juara 3", value: "Rp 3.000.000,-" },
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
      <div className="flex flex-col gap-3 items-center bg-blue-900 w-full px-10 pb-16">
        <h1 className="mt-12 mb-4 font-bold text-white text-3xl">PRIZE</h1>
        {prizeData.map((prize, index) => (
          <div
            key={index}
            className="w-full max-w-xl flex flex-col text-center text-white font-bold bg-red-700 rounded-md px-4 py-2 border-4 border-black"
          >
            <h1>{prize.title}</h1>
            <h1>{prize.value}</h1>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="flex flex-col items-center gap-6 pb-8 w-full max-w-6xl px-10">
        <h1 className="mt-12 font-bold text-3xl">TIMELINE</h1>
        <Countdown targetDate={new Date("2025-01-31T07:00:00")} />
        <div className="w-full bg-gradient-to-b from-[rgba(217,217,217,0)] to-[#FF634B]">
          <Timeline timelineData={timelineData} />
        </div>
      </div>

      {/* FAQ */}
      <div className="flex flex-col items-center gap-6 pb-16 w-full px-10">
        <h1 className="mt-12 font-bold text-3xl">F.A.Q.</h1>
        <FAQ faqData={faqData} />
      </div>

      {/* Contact */}
      <div className="relative flex flex-col items-center lg:items-start gap-6 pb-20 w-full px-10 bg-white">
        <h1 className="mt-12 font-bold text-3xl text-center lg:text-start">Contact Person</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-blue-900 text-white p-5 flex flex-col rounded-xl items-center justify-center size-44">
            <FaWhatsapp size={50} />
            <h1 className="mt-4">081234567890</h1>
            <h1>(Lorem)</h1>
          </div>
          <div className="bg-blue-900 text-white p-5 flex flex-col rounded-xl items-center justify-center size-44">
            <FaLine size={50} />
            <h1 className="mt-4">loremidline</h1>
            <h1>(Lorem)</h1>
          </div>
          <div className="bg-blue-900 text-white p-5 flex flex-col rounded-xl items-center justify-center size-44">
            <FaInstagram size={50} />
            <h1 className="mt-4">@arkav</h1>
          </div>
        </div>
        <Image
          src="/contact.svg"
          alt="contact person"
          width={250}
          height={250}
          className="absolute right-0 bottom-0 hidden lg:block"
        />
      </div>
    </div>
  );
}
