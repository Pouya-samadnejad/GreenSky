import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between w-full items-center py-2.5 px-[70px] bg-white/50 backdrop-blur-xl fixed border-b-1 border-white z-50 ">
      <Link href="/">
        <Image
          src="/GREEN SKY HOLIDAY HOME LOGO-03 (2) 1.png"
          height={61.56}
          width={219}
          alt="logo of website"
        />
      </Link>

      <ul className="flex gap-4 ">
        <Link href="/" className="hover:scale-110 transition-all">
          <li>Contact us</li>
        </Link>
        <Link href="/properties" className="hover:scale-110 transition-all">
          <li>Properties</li>
        </Link>
        <Link href="/" className="hover:scale-110 transition-all">
          <li>Contact us</li>
        </Link>
      </ul>
    </nav>
  );
}
