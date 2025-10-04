import { supabase } from "./supabase";

export async function getProperties() {
  let { data: properties, error } = await supabase
    .from("properties")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Properties Can not be load");
  }
  return properties;
}

export async function getPropertyById(id: string | number) {
  const { data: property, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Property could not be loaded");
  }

  return property;
}
