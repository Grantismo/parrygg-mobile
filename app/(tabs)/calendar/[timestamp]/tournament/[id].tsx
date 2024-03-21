import { useLocalSearchParams } from "expo-router";
import React from "react";

import CalendarTournamentPage from "@/components/pages/main/calendar/CalendarTournamentPage";

const CalendarTournament = () => {
  const { timestamp, id } = useLocalSearchParams<{
    timestamp: string;
    id: string;
  }>();
  return <CalendarTournamentPage timestamp={timestamp!} tournamentId={id!} />;
};

export default CalendarTournament;
