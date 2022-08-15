import { format } from "date-fns";

const alertLevels = {
  1: {
    status: "normal",
    color: "bg-normal",
    msg: "NORMAL/NONE",
  },
  2: {
    status: "info",
    color: "bg-info",
    msg: "INFO",
  },
  3: {
    status: "advisory",
    color: "bg-advisory",
    msg: "ADVISORY/MEDIUM",
  },
  4: {
    status: "warning",
    color: "bg-warning",

    msg: "WARNING/HIGH",
  },
  5: {
    status: "critical",
    color: "bg-critical",
    msg: "CRITICAL",
  },
  6: {
    status: "emergency",
    color: "bg-emergency",
    msg: "EMERGENCY",
  },
};

const formatDate = (date) => {
  if (!date) return "- -";
  return format(new Date(date), "dd/MM/yyyy hh:mm");
};

const EventLogTable = ({ data }) => (
  <div className="flex flex-col">
    <div className="inline-block min-w-full py-2 align-middle ">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-[#332D41] h-[75px]">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left  font-semibold text-[#fff] sm:pl-6"
              >
                Level
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left  font-semibold text-[#fff]"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left  font-semibold text-[#fff]"
              >
                Resolved?
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left  font-semibold text-[#fff]"
              >
                Resolve Date
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left  font-semibold text-[#fff]"
              >
                Message
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-[#4A4458]">
            {data.map(({ ID, level, date, isResolve, resolveDate, msg }) => (
              <tr key={ID}>
                <td className="flex items-center gap-3 py-4 pl-4 pr-3  font-medium text-[#fff] sm:pl-6">
                  <div
                    className={`w-5 h-5 rounded-full ${alertLevels[level].color}`}
                  />
                  <p>{alertLevels[level].msg}</p>
                </td>
                <td className="whitespace-nowrap px-3 py-4  text-[#fff]">
                  {formatDate(date)}
                </td>
                <td className="whitespace-nowrap px-3 py-4  text-[#fff]">
                  {isResolve ? "Y" : "N"}
                </td>
                <td className="whitespace-nowrap px-3 py-4  text-[#fff]">
                  {/* {format(new Date(resolveDate), "dd/MM/yyyy") || "- -"} */}
                  {formatDate(resolveDate)}
                </td>
                <td className="whitespace-nowrap px-3 py-4  text-[#fff]">
                  {msg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default EventLogTable;
