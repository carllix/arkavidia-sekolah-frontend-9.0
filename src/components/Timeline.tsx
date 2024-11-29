import Image from "next/image";

interface TimelineDataProps {
  title: string;
  date: string;
}

interface TimelineProps {
  timelineData: TimelineDataProps[];
}

export default function Timeline({timelineData}: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute top-20 w-full h-1 bg-white z-0" />
      <div className="overflow-x-scroll flex flex-row gap-x-10 pt-8 pb-16 px-12 relative z-10">
        {timelineData.map((event, index) => (
            <div key={index} className="flex flex-col gap-6 text-center items-center px-6">
                <Image
                    src="/diskTimeline.svg"
                    alt="Disk Timeline"
                    width={100}
                    height={100}
                />

                <div className="flex flex-col gap-2 text-white">
                    <h1 className="font-bold text-xl">
                    {event.title}
                    </h1>
                    <h3 className="font-bold text-sm">{event.date}</h3>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}
