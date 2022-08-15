import { render, screen } from "@testing-library/react";
import EventLogTable from "./EventLogTable";

const mockingEventLogs = [
  {
    ID: "1",
    level: 4,
    date: "2022-06-15T18:18:04.483Z",
    isResolve: true,
    resolveDate: "2022-06-15T18:18:04.483Z",
    msg: "Battery is to low",
  },
];

test('renders BravoTextEditor"', () => {
  render(<EventLogTable data={mockingEventLogs} />);
  const children = screen.getByText(/Battery is to low/i);
  expect(children).toBeInTheDocument();
});
