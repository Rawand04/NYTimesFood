import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src="https://static01.nyt.com/images/2023/01/17/dining/onepot-cheesypasta/onepot-cheesypasta-threeByTwoMediumAt2X.jpg?width=1280&quality=75&auto=webp"
        alt=""
        width={350}
        height={350}
        className="w-full rounded"
      />
      <h1 className="font-[900] text-lg text-primary font-sourceserif">
        Recipe of the day
      </h1>

      {/* content */}
      <div className="flex flex-col gap-4 font-baskerville">
        <div>
          <h1 className="font-bold text-[30px] ">Caramelized Garlic Fish</h1>
          <h3>
            By{" "}
            <Link href="" className="underline font-franklin font-[600]">
              Genevieve Ko
            </Link>
          </h3>
        </div>
        <p className="">
          This sauce of sugar, melted to a dark brown, with garlic and fish
          sauce, can enhance chicken, pork and all manner of seafood.
        </p>

        <div className="font-franklin font-[600]">
          <div>
            rating: <span>1,085</span>
          </div>
          <div>45 minutes</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
