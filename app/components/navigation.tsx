import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { logout } from "../logout/actions";

const Navigation = () => {
  return (
    <section className=" h-screen border-rad bg-[#181C3A] m-2 p-5 flex flex-col gap-5 rounded-lg">
      <Link href="/jobs">
        <AiOutlineHome className="size-6 text-white" />
      </Link>
      <Link href="/stats">
        <IoStatsChartSharp className="size-6 text-white" />
      </Link>
      <form action={logout}>
        <button type="submit">
          <IoExitOutline className="size-6 text-red-600" />
        </button>
      </form>
    </section>
  );
};

export default Navigation;
