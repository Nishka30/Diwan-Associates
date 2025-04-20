"use client";

import { motion } from "framer-motion";
import { 
  Users,
  CalendarDays,
  TrendingUp,
  UserPlus
} from "lucide-react";
import { STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Stats = () => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6" };
    switch (iconName) {
      case "users": return <Users {...iconProps} />;
      case "calendarDays": return <CalendarDays {...iconProps} />;
      case "trendingUp": return <TrendingUp {...iconProps} />;
      case "userPlus": return <UserPlus {...iconProps} />;
      default: return null;
    }
  };

  return (
    <section className="py-12 md:py-16 bg-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-purple-800 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                {getIcon(stat.icon)}
              </div>
              <h3 className={cn(
                "text-2xl md:text-3xl font-bold mb-1",
                index % 2 === 0 ? "text-purple-200" : "text-white"
              )}>
                {stat.value}
              </h3>
              <p className="text-purple-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;