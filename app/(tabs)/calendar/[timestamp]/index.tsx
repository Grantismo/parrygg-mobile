import { useLocalSearchParams } from "expo-router";
import React from "react";

import CalendarDatePage from "@/components/pages/main/calendar/CalendarDatePage";

const CalendarDate = () => {
  const { timestamp } = useLocalSearchParams<{ timestamp: string }>();
  return <CalendarDatePage timestamp={timestamp!} />;
};

export default CalendarDate;
