import { redirect } from "next/navigation";
import { logout } from "./logout/actions";

import { createClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
