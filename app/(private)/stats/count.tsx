import ProgressBar from "@/app/components/progressBar";

interface countProp {
  length: number | undefined;
}

const Count: React.FC<countProp> = ({ length }) => {
  return (
    <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-4 rounded-lg">
      <span>Total applied jobs:{length}/500</span>
      <ProgressBar progress={length} />
    </div>
  );
};

export default Count;
