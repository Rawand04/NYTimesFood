import { articles } from "@/app/lib/data";
import Image from "next/image";


const Articles = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <hr className="border-[1.5] rounded" />
        <h2 className="uppercase font-bold font-sourceserif">
          Latest Articles
        </h2>
      </div>

      {articles.map((item, index) => (
        <div key={index}>
          <div className="flex w-full gap-8">
            <div>
              <h1
                className={`font-sourceserif ${index === 0 ? "text-xl" : ""}`}
              >
                {item.title}
              </h1>
              <p className="text-xs text-gray-500 my-2 font-franklin">
                {item.duration}
              </p>
            </div>
            <Image
              src={item.image}
              alt={item.title}
              height={88}
              width={88}
              className={`${index === 0 ? "w-[200px] h-[130px]" : "w-[100px] h-[66px]"}`}
            />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Articles;
