import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCartProps {
  location: string;
  name: string;
  regularPrice: number;
  area: number;
  beds: string;
  maxCapacity: number;
  bath: number;
  image: string;
  id: string;
}
export default function PropertyCart({
  location,
  name,
  regularPrice,
  area,
  beds,
  maxCapacity,
  bath,
  image,
  id,
}: PropertyCartProps) {
  return (
    <Link
      href={`/properties/${id}`}
      className="bg-bg-brown rounded-3xl relative w-xs"
    >
      <div>
        <Image
          src={image}
          width={313}
          height={313}
          alt={`image of property of ${name} `}
          className="rounded-t-3xl"
        />
      </div>
      <div className=" px-4 py-3">
        <div className="flex justify-between items-center ">
          <p className="text-[18px] font-bold text-[#333333]">{name}</p>
          <Icon
            icon="basil:caret-right-outline"
            width="24"
            height="24"
            className="text-[#ABABAB]"
          />
        </div>
        <p className="text-[#656565] text-sm">{location}</p>
        <div className="flex gap-1 items-baseline mt-4">
          <p className="font-bold">{regularPrice}</p>
          <p>$</p>
          <p className="text-sm">night</p>
        </div>
      </div>
      <div className="flex justify-between py-3 px-4 border-t-2">
        <div className="flex gap-2">
          <div className="flex items-center">
            <Icon
              icon="basil:user-outline"
              width="24"
              height="24"
              className="text-[#ABABAB]"
            />
            <span>{maxCapacity}</span>
          </div>
          <div className="flex items-center">
            <Icon
              icon="ion:bed-outline"
              width="24"
              height="24"
              className="text-[#ABABAB]"
            />
            <span>{beds}</span>
          </div>
          <div className="flex items-center">
            <Icon
              icon="material-symbols-light:shower-outline-rounded"
              width="24"
              height="24"
              className="text-[#ABABAB]"
            />
            <span>{bath}</span>
          </div>
        </div>
        <div className="flex items-center">
          <Icon
            icon="iconamoon:screen-full-light"
            width="24"
            height="24"
            className="text-[#ABABAB]"
          />
          <span>{area}</span>
          <span>m²</span>
        </div>
      </div>
    </Link>
  );
}
