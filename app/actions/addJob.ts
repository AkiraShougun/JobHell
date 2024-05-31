"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addJob(formData: any) {
  const title = formData.get("title");
  const company = formData.get("company");
  const link = formData.get("link");
  const location = formData.get("location");
  const website = formData.get("website");

  const supabase = createClient();
  const { data: users, error: err } = await supabase.auth.getUser();
  if (err || users!.user) {
    console.log(err);
  }

  const { data, error } = await supabase.from("jobs").insert([
    {
      title,
      link,
      company,
      location,
      website,
      user_id: users.user?.id,
    },
  ]);

  if (error) {
    console.log(error);
  }

  revalidatePath("/jobs");
}
