import { socialMedia } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

const NewsLetter = async () => {
  return (
    <div className="bg-white">
      <div className=" w-[70%] m-auto py-12 flex gap-32 flex-wrap">
        {/* left */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Get Our Newsletter</h1>
          <h2>
            Get recipes, tips and NYT special offers delivered straight to your
            inbox.
          </h2>
          <p>Opt out or contact us anytime. See our Privacy Policy.</p>

          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your Email"
              className="border border-gray-400 rounded bg-white p-2 w-[80%]"
            />
            <input
              type="submit"
              value="Sign up"
              className="bg-primary text-white rounded-full px-4 py-2 hover:bg-primary-hover"
            />
          </form>
        </div>
        {/* right  */}
        <div className="flex flex-col">
          <h1 className="font-bold">Follow Us</h1>
          {/* social media links  */}
          <div className="flex gap-4 justify-center m-auto">
            {socialMedia.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                className="w-10 p-2 border rounded-full "
              >
                <Image src={item.icon} alt="" width={50} height={50} />
              </Link>
            ))}
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
