import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import AddJob from "@/app/components/addJob";
import { deleteJob } from "@/app/actions/deleteJob";
import { MdOutlineDelete } from "react-icons/md";

export default async function PrivatePage() {
  const supabase = createClient();
  const { data: datas, error: err } = await supabase.auth.getUser();
  if (err || !datas?.user) {
    redirect("/login");
  }
  const { data: jobs } = await supabase
    .from("jobs")
    .select("title, link,id,company,location,website")
    .eq("user_id", datas.user.id);

  return (
    <div className=" overflow-x-hidden ">
      <AddJob />
      <pre className="text-white">{datas.user.email}</pre>
      {jobs && jobs.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-5">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex flex-col rounded-xl max-h-72 p-2 gap-1 min-w-60 bg-[#181C3A]"
            >
              <strong className="text-white">{job.title}</strong>
              <p className="text-gray-500">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <p className="text-gray-500">{job.website}</p>
              <div className="flex justify-between">
                <Link href={`${job.link}`} className="text-white">
                  Link
                </Link>
                <form action={deleteJob}>
                  <input type="hidden" name="id" value={job.id}></input>
                  <button type="submit">
                    <MdOutlineDelete className="text-red-700 size-7" />
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <span className="text-white text-2xl">No jobs found.</span>
      )}
    </div>
  );
}
