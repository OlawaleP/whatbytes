import { TestResult } from "@/types";
import Card from "../UI/Card";

interface QuickStatsProps {
  data: TestResult;
}

interface StatItemProps {
  icon: string;
  iconColor?: string;
  value: React.ReactNode;
  label: string;
  isLast?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ icon, iconColor = "", value, label, isLast = false }) => {
  return (
    <div className={`flex items-center gap-3 w-full 
      ${!isLast ? "border-b sm:border-b-0 md:border-b lg:border-b xl:border-b-0 sm:border-r md:border-r-0 lg:border-r-0 xl:border-r border-gray-300 pb-4 sm:pb-0 md:pb-4 lg:pb-4 xl:pb-0 sm:pr-4 md:pr-0 lg:pr-0 xl:pr-4 mb-4 sm:mb-0 md:mb-4 lg:mb-4 xl:mb-0" : ""}`}>
      <div>
        <span className={`${iconColor} border-2 rounded-full p-2 lg:p-3 bg-slate-100 inline-flex items-center justify-center ml-2`}>
          <img src={icon} alt="icon" className="w-4 h-4 lg:w-5 lg:h-5" />
        </span>
      </div>
      <div className="flex-1">
        <p className={`text-statText font-bold text-base lg:text-lg`}>{value}</p>
        <p className="text-xs lg:text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
};

const QuickStats: React.FC<QuickStatsProps> = ({ data }) => {
  const stats = [
    {
      icon: "/trophy.svg",
      iconColor: "text-amber-500",
      value: data.rank,
      label: "YOUR RANK"
    },
    {
      icon: "/note.svg",
      value: <span className="text-primary">{data.percentile}%</span>,
      label: "PERCENTILE"
    },
    {
      icon: "/check.svg",
      iconColor: "text-green-500",
      value: `${data.correctAnswers} / ${data.totalQuestions}`,
      label: "CORRECT ANSWERS",
      isLast: true
    }
  ];

  return (
    <Card title="Quick Statistics">
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-col xl:flex-row items-center justify-center md:items-center px-2 sm:px-4 py-4 gap-2 sm:gap-0 md:gap-2 lg:gap-4 xl:gap-0">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            iconColor={stat.iconColor}
            value={stat.value}
            label={stat.label}
            isLast={stat.isLast}
          />
        ))}
      </div>
    </Card>
  );
};

export default QuickStats;