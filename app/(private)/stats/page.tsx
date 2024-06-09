import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Count from "./count";
import BarChart from "./barChart";

export default async function Statistics() {
  const supabase = createClient();
  const { data: datas, error: err } = await supabase.auth.getUser();
  if (err || !datas?.user) {
    redirect("/login");
  }
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("user_id", datas.user.id);
  if (error) {
    console.error("Error fetching", error);
  }
  return (
    <main>
      <Count length={data?.length} />
      <BarChart jsondata={data} />
    </main>
  );
}