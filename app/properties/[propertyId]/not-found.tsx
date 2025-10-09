import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFpund() {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-24 gap-2.5">
      <h3 className="text-9xl!">404</h3>
      <p className="text-xl">Your property was not founds</p>
      <Button className="bg-prime-green rounded-full hover:bg-hover-green">
        <Link href="/properties">Back to all Prprties</Link>
      </Button>
    </div>
  );
}
