"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

interface JobData {
  company: string | null;
  title: string | null;
  link: string | null;
  location: string | null;
  website: string | null;
  user_id: string;
}

export async function addJob(formData: FormData) {
  const title = formData.get("title");
  const company = formData.get("company");
  const link = formData.get("link");
  const location = formData.get("location");
  const website = formData.get("website");

  // Convert FormDataEntryValue | null to string | null
  const titleString = title ? title.toString() : null;
  const companyString = company ? company.toString() : null;
  const linkString = link ? link.toString() : null;
  const locationString = location ? location.toString() : null;
  const websiteString = website ? website.toString() : null;

  const supabase = createClient();
  const { data: users, error: err } = await supabase.auth.getUser();
  if (err || !users?.user) {
    console.error(err);
    return;
  }
  const userId = users.user.id;

  const jobData: JobData = {
    title: titleString,
    link: linkString,
    company: companyString,
    location: locationString,
    website: websiteString,
    user_id: userId,
  };

  const { error } = await supabase.from("jobs").insert([jobData]);

  if (error) {
    console.error(error);
    return;
  }

  revalidatePath("/jobs");
}
