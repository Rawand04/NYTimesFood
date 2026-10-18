import Image from "next/image";
import SearchBar from "./search-bar";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { logout } from "@/app/(auth)/logout/actions";
import { nav } from "@/app/lib/data";
import { getSession } from "@/app/lib/session";

const Header = async () => {
  const session = await getSession();
  const loggedIn = session ? true : false;
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white font-franklin">
      <div className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="shrink-0">
            <Image
              src={Logo}
              alt="Logo"
              width={168}
              height={31}
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex-1 min-w-[200px]">
            <SearchBar />
          </div>

          {loggedIn ? (
            <button
              onClick={logout}
              className="rounded-full border px-5 py-2 whitespace-nowrap"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-full border px-5 py-2 whitespace-nowrap"
            >
              Login
            </Link>
          )}

          <Link
            href="/cart"
            className="rounded-full bg-primary px-6 py-2 text-white whitespace-nowrap hover:bg-primary-hover"
          >
            Go to Cart
          </Link>
        </div>

        <nav className="mt-4 flex gap-6 overflow-x-auto whitespace-nowrap font-bold scrollbar-hide">
          {nav.map((item, index) => (
            <Link href="/recipes" key={index} className="cursor-pointer shrink-0">
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
