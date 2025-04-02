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
    <div className={`flex items-center gap-3 w-full sm:w-auto ${!isLast ? "border-b sm:border-b-0 sm:border-r border-gray-300 pb-4 sm:pb-0 sm:pr-4" : ""}`}>
      <div>
        <span className={`${iconColor} border-2 rounded-full p-3 bg-slate-100 inline-flex items-center justify-center`}>
          <img src={icon} alt="icon" className="w-5 h-5" />
        </span>
      </div>
      <div>
        <p className={typeof value === "string" ? "text-statText font-bold" : "text-statText font-bold"}>{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
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
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 gap-4 sm:gap-0">
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