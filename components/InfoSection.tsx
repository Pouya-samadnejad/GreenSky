import Image from "next/image";

interface InfoSectionProps {
  title?: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
}

function InfoSection({
  title,
  description,
  imageSrc,
  imageAlt,
}: InfoSectionProps) {
  return (
    <div className="w-full flex items-center justify-between bg-[#F7F4F0] rounded-[60px] mb-20">
      <div className="relative w-1/2 h-[600px]">
        <Image
          src={imageSrc}
          alt={imageAlt || "info image"}
          fill
          className="rounded-l-[40px] object-cover"
        />
      </div>
      <div className="px-9 py-10 gap-y-2.5">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InfoSection;
