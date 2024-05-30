import { redirect } from "next/navigation";
import { logout } from "./logout/actions";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

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
    <div className="m-10">
      <form action={logout}>
        <button type="submit">Logout</button>
        <pre>{datas.user.email}</pre>
        {jobs && jobs.length > 0 ? (
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>
                <strong>Title:{job.title}</strong>
                <Link href={job.link}>Link</Link>
                <p>Company:{job.company}</p>
                <p>Location:{job.location}</p>
                <p>Website:{job.website}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No jobs found.</p>
        )}
      </form>
    </div>
  );
}
