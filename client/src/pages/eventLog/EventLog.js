import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import EventLogTable from "components/EventLogTable/EventLogTable";

import { fetchEventLogs } from "services/eventLog.service";

const EventLog = () => {
  const [loading, setLoading] = useState(false);
  console.log("🚀 ~ file: EventLog.js ~ line 10 ~ EventLog ~ loading", loading);
  const [eventLogs, setEventLogs] = useState([]);
  console.log(
    "🚀 ~ file: EventLog.js ~ line 11 ~ EventLog ~ eventLogs",
    eventLogs
  );

  const getEventLogs = async () => {
    setLoading(true);
    try {
      const { data } = await fetchEventLogs();
      setEventLogs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEventLogs();
  }, []);

  return <>{eventLogs && <EventLogTable data={eventLogs} />}</>;
};

export default EventLog;
