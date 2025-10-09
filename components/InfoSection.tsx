import Image from "next/image";
import { Icon } from "@iconify/react";

interface InfoSectionProps {
  title?: string;
  description?: string;
  image: string;
  imageAlt?: string;
  maxCapacity?: number;
  beds?: number;
  bath?: number;
  area?: number;
  regularPrice?: number;
  location?: string;
}

function InfoSection({
  title,
  description,
  image,
  imageAlt,
  maxCapacity,
  beds,
  bath,
  area,
  regularPrice,
  location,
}: InfoSectionProps) {
  return (
    <>
      <div className="w-full flex items-center justify-between bg-[#F7F4F0] rounded-[60px] mb-20">
        <div className="relative w-1/2 h-[600px]">
          <Image
            src={image}
            alt={imageAlt || "info image"}
            fill
            className="rounded-l-[40px] object-cover"
          />
        </div>
        <div className="px-9 py-10 gap-y-2.5">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="flex items-center gap-20">
            <div className="mt-7 space-y-2.5">
              {maxCapacity && (
                <div className="flex items-center">
                  <Icon
                    icon="basil:user-outline"
                    width="24"
                    height="24"
                    className="text-[#ABABAB]"
                  />
                  <span>{maxCapacity}</span>
                </div>
              )}
              {beds && (
                <div className="flex items-center">
                  <Icon
                    icon="ion:bed-outline"
                    width="24"
                    height="24"
                    className="text-[#ABABAB]"
                  />
                  <span>{beds}</span>
                </div>
              )}
              {bath && (
                <div className="flex items-center">
                  <Icon
                    icon="material-symbols-light:shower-outline-rounded"
                    width="24"
                    height="24"
                    className="text-[#ABABAB]"
                  />
                  <span>{bath}</span>
                </div>
              )}
            </div>
            <div className="mt-7 space-y-2.5">
              {location && (
                <div className="flex items-center">
                  <Icon
                    icon="weui:location-outlined"
                    width="24"
                    height="24"
                    className="text-[#ABABAB]"
                  />
                  <span>{location}</span>
                </div>
              )}
              {regularPrice && (
                <div className="flex items-center">
                  <Icon
                    icon="solar:tag-price-outline"
                    width="24"
                    height="24"
                    className="text-[#ABABAB]"
                  />
                  <span>{regularPrice}</span>
                </div>
              )}
              {area && (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoSection;
