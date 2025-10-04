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
