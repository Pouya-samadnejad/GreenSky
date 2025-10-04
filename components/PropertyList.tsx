import { getProperties } from "@/lib/data-service";
import PropertyCart from "./PropertyCart";

export default async function PropertyList() {
  const properties = await getProperties();
  console.log(properties);
  return (
    <div className="flex gap-4">
      {properties?.map((proprty) => (
        <PropertyCart key={proprty.id} {...proprty} />
      ))}
    </div>
  );
}
