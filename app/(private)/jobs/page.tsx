import { redirect } from "next/navigation";
import { logout } from "../../logout/actions";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import AddJob from "@/app/components/addJob";

export default async function PrivatePage() {
  const supabase = createClient();
  const { data: datas, error: err } = await supabase.auth.getUser();
  if (err || !datas?.user) {
    redirect("/login");
  }
  const { data: jobs, error } = await supabase
    .from("jobs")
    .select("title, link,id,company,location,website")
    .eq("user_id", datas.user.id);

  return (
    <div>
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
      <AddJob />
      <pre>{datas.user.email}</pre>
      {jobs && jobs.length > 0 ? (
        <div className="grid gap-3 grid-flow-col ">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col bg-[#181C3A] p-2 rounded-xl"
            >
              <strong className="main-text">Title:{job.title}</strong>
              <p className="local-text">Company:{job.company}</p>
              <p className="local-text">Location:{job.location}</p>
              <p className="local-text">Website:{job.website}</p>
              <Link href={job.link} className="main-text">
                Link
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}
