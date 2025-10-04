import InfoSection from "@/components/InfoSection";
import PropertyList from "@/components/PropertyList";
import Spinner from "@/components/Spinner";
import React, { Suspense } from "react";

function page() {
  return (
    <div>
      <InfoSection
        title="Ready for your next trip?"
        description="Choose the best accommodation from a wide portfolio of properties hosted by Green Sky and get a 10% discount for your first stay."
        imageSrc="/family.jpg"
        imageAlt="family going for a trip"
      />
      <Suspense fallback={<Spinner />}>
        <PropertyList />
      </Suspense>
    </div>
  );
}

export default page;
