import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/cover.jpg"
        fill
        alt="home page cover"
        className="object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-6xl font-bold">Green Sky Holiday Home</h1>
        <p className="text-prime-brown">Unwind in style</p>
        <p className="text-prime-brown">in every corner of your stay</p>
        <div className="flex gap-3 mt-4">
          <Button className="bg-white rounded-full hover:bg-gray-100 text-prime-green">
            <Link href="/">Book with us</Link>
          </Button>
          <Button className="bg-prime-green rounded-full hover:bg-hover-green">
            <Link href="/">Host with us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
