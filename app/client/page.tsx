"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Job {
  title: string;
  link: string;
}

const JobList: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();

      const { data, error } = await supabase.auth.getUser();
      if (error || !data) {
        router.push("/login");
      } else {
        setUser(data.user.id);
        fetchJobs(data.user.id); // Fetch jobs once the user is set
      }
    }

    async function fetchJobs(userId: string) {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        console.error("Error fetching jobs:", error.message);
      } else if (data) {
        setJobs(data);
      }
    }

    getUser();
  }, [router]);
  return (
    <div>
      {!user ? (
        <h1>Redirecting...</h1>
      ) : (
        <div>
          <h1>Job Titles</h1>
          {jobs.length > 0 ? (
            <div>
              {jobs.map((job, index) => (
                <ul key={index}>
                  <li>{job.title}</li>
                  <li>{job.link}</li>
                </ul>
              ))}
            </div>
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default JobList;

{
  /* <div>
      <h1>Job Titles</h1>
      {jobs.length > 0 ? (
        <div>
          {jobs.map((job, index) => (
            <ul key={index}>
              <li>{job.title}</li>
              <li>{job.link}</li>
            </ul>
          ))}
        </div>
      ) : (
        <p>No jobs found.</p>
      )}
    </div> */
}
