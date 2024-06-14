import ProgressBar from "@/app/components/progressBar";
import { Jobs } from "./barChart";

interface WebsiteStatusProps {
  jsondata: Jobs[] | null;
}

const WebsiteStatus: React.FC<WebsiteStatusProps> = ({ jsondata }) => {
  const websiteFreq: { [key: string]: number } = {};
  jsondata?.forEach((entry) => {
    const website = entry.website;
    if (website) {
      websiteFreq[website] = (websiteFreq[website] || 0) + 1;
    }
  });
  return (
    <div className="bg-[#181C3A] rounded-lg p-2">
      {Object.keys(websiteFreq).map((web, index) => (
        <div key={index} className="text-white block">
          <span>{web}</span>
          <ProgressBar progress={websiteFreq[web]} />
        </div>
      ))}
    </div>
  );
};

export default WebsiteStatus;
