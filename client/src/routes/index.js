import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "layouts/main/MainLayout";

import EventLogPage from "pages/eventLog/EventLog";
import VehiclePage from "pages/vehicle/Vehicle";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<VehiclePage />} />
        <Route path="vehicle" element={<VehiclePage />} />
        <Route path="eventlog" element={<EventLogPage />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
