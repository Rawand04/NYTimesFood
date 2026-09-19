import { ABOUT } from "@/app/lib/data";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex my-10 gap-24 shrink-0 flex-wrap">
      {/* card  */}
      {ABOUT.map((card, i) => (
        <div key={i} className="min-w-[30%]">
          <Image
            src={card.image}
            alt=""
            width={100}
            height={100}
            className="object-cover w-full"
          />
          <div className="flex flex-col gap-4 mt-6">
            <h1 className="font-bold text-xl">{card.title}</h1>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
