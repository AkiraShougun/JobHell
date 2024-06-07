import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { logout } from "../logout/actions";

const Navigation = () => {
  return (
    <section className=" h-screen border-rad bg-[#181C3A] m-2 p-10 flex flex-col gap-10 rounded-full justify-between sticky top-0">
      <div className="text-cyan-400">JH</div>
      <div className="gap-10 flex flex-col">
        <Link href="/jobs">
          <AiOutlineHome className="size-6 text-white hover:text-cyan-400" />
        </Link>
        <Link href="/stats">
          <IoStatsChartSharp className="size-6 text-white hover:text-cyan-400" />
        </Link>
      </div>
      <form action={logout}>
        <button type="submit">
          <IoExitOutline className="size-6 text-white hover:text-red-400" />
        </button>
      </form>
    </section>
  );
};

export default Navigation;
