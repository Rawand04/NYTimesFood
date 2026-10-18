import Link from "next/link";

interface IFooterProps {
  header: string;
  links: string[];
}

const LinksList = ({ header, links }: IFooterProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold">{header}</h1>
      {links.map((item, index) => (
        <Link href="" key={index}>
          {item}
        </Link>
      ))}
    </div>
  );
};

export default LinksList;
