import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const SkillCard = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="p-6 h-full flex flex-col justify-between border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
      <CardHeader className="flex flex-col items-center space-y-4">
        {icon}
        <CardTitle className="text-xl font-semibold text-gray-800 text-center dark:text-gray-200">
          {title}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default SkillCard;
