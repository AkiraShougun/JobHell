import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Count from "./count";
import BarChart from "./barChart";
import WebsiteStatus from "./websiteStatus";
import PieChart from "./pieChart";

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
    <main className="p-5">
      <Count length={data?.length} />
      <BarChart jsondata={data} />
      <WebsiteStatus jsondata={data} />
      <PieChart length={data?.length} />
    </main>
  );
}
