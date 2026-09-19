import Link from "next/link";

const PromotionBaner = () => {
  return (
    <Link
      href=""
      className="w-full bg-primary hover:bg-primary-hover py-5 justify-between px-12 text-white flex fixed mt-28 z-400"
    >
      <span></span>
      <div className="">The cooking Sale is on. 75% of your first year.</div>
      <div className="underline">Learn more</div>
    </Link>
  );
};

export default PromotionBaner;
