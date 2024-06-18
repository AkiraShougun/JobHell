"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function editJob(formData: any) {
  const id = formData.get("id");
  const title = formData.get("title");
  const company = formData.get("company");
  const link = formData.get("link");
  const location = formData.get("location");
  const website = formData.get("website");

  const supabase = createClient();
  const { data: users, error: err } = await supabase.auth.getUser();
  if (err || !users?.user) {
    console.error(err);
    return;
  }
  const userId = users.user.id;

  const { error, data } = await supabase
    .from("jobs")
    .update({
      title,
      company,
      link,
      location,
      website,
    })
    .match({ id, user_id: userId });

  if (error) {
    console.error("Error Updating", error);
    return;
  }

  revalidatePath("/jobs");

  return { message: "Success" };
}
