import { render, screen } from "@testing-library/react";
import VehicleCard from "./VehicleCard";

const mockingVehicleCard = {
  name: "example card",
  coordinate: "37.14202738, -76.28295364",
  altitude: 3,
  battery: 30,
};

test('renders BravoTextEditor"', () => {
  render(<VehicleCard {...mockingVehicleCard} />);
  const children = screen.getByText(/example card/i);
  expect(children).toBeInTheDocument();
});
