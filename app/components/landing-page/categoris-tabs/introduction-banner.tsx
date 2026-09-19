import Image from "next/image";

const IntroductionBanner = () => {
  return (
    <div className="h-[22vh]">
      <div className="w-full h-full relative ">
        <Image
          src="https://static01.nyt.com/images/2023/01/17/dining/onepot-cheesypasta/onepot-cheesypasta-threeByTwoMediumAt2X.jpg?width=1280&quality=75&auto=webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute  lg:top-10 lg:left-20 lg:w-[40%] w-full inset-0">
          <div className="flex flex-col gap-4 bg-white p-4">
            <h1>Make Something Delicious</h1>
            <p>
              Whether it's a quick and easy dinner from our Weeknight 100 list,
              or a crowd-pleasing dish for Rosh Hashana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionBanner;
