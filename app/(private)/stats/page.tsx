import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Statistics() {
  const supabase = createClient();
  const { data: datas, error: err } = await supabase.auth.getUser();
  if (err || !datas?.user) {
    redirect("/login");
  }
  const { count, error } = await supabase
    .from("jobs")
    .select("*", { count: "exact", head: true })
    .eq("user_id", datas.user?.id);
  if (error) {
    console.error("Error fetching", error);
  }
  return (
    <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-4 rounded-lg">
      <span>Total applied jobs:</span>
      {count}
    </div>
  );
}
