import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import EventLogTable from "components/EventLogTable/EventLogTable";

import { fetchEventLogs } from "services/eventLog.service";

const EventLog = () => {
  const [loading, setLoading] = useState(false);
  const [eventLogs, setEventLogs] = useState([]);

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

  return (
    <>
      {loading ? (
        <div className="w-[100vw] flex items-center justify-center h-[100vh]">
          <ClipLoader
            color={"#fff"}
            loading={loading}
            cssOverride={{ display: "block" }}
            size={150}
          />
        </div>
      ) : (
        <>{eventLogs && <EventLogTable data={eventLogs} />}</>
      )}
    </>
  );
};

export default EventLog;
