"use server";
"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteJob(formData: any) {
  const jobId = formData.get("id");

  const supabase = createClient();
  const { data: users, error: err } = await supabase.auth.getUser();
  if (err || users!.user) {
    console.log(err);
  }

  const { data, error } = await supabase
    .from("jobs")
    .delete()
    .match({ id: jobId, user_id: users.user?.id });

  if (error) {
    console.log(error);
  }

  revalidatePath("/jobs");
}
