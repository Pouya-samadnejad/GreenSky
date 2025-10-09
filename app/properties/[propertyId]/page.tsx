import InfoSection from "@/components/InfoSection";
import { getPropertyById } from "@/lib/data-service";
import React from "react";

interface PropertyPageProps {
  params: {
    propertyId: string;
  };
}

export async function generateMetadata({ params }: PropertyPageProps) {
  const name = await getPropertyById(params.propertyId);
  return {
    title: name.name,
    description: name.description,
  };
}

export default async function page({ params }: PropertyPageProps) {
  const property = await getPropertyById(params.propertyId);
  console.log(property);
  return (
    <div>
      <InfoSection
        title={property.name}
        imageAlt={`image of property of ${property.name}`}
        {...property}
      />
    </div>
  );
}
