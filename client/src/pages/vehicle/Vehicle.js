import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import VehicleCard from "components/VehicleCard/VehicleCard";

import { fetchVehicles, fetchVehicleDetails } from "services/vehicle.service";

const Vehicle = () => {
  const [loading, setLoading] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState([]);

  const getVehicles = async () => {
    setLoading(true);
    try {
      const { data: vehicleIdList } = await fetchVehicles();

      const promises = vehicleIdList.map(async ([vehicleId]) => {
        const { data } = await fetchVehicleDetails(vehicleId);
        return data;
      });

      const result = await Promise.all(promises);

      setVehicleDetails(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const renderVehicles = () =>
    vehicleDetails.map((vehicle) => {
      const {
        ID,
        name,
        inertialStates,
        operatingStates: { remainingEnergy },
      } = vehicle;

      const {
        location: [LAT, LONG, ATL],
      } = inertialStates;

      const props = {
        name,
        coordinate: `${LAT}, ${LONG}`,
        altitude: Math.floor(ATL),
        battery: Math.floor(remainingEnergy),
      };

      return (
        <div className="md:col-span-4 sm:col-span-12" key={ID}>
          <VehicleCard {...props} />
        </div>
      );
    });

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-7 ">
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
        renderVehicles()
      )}
    </div>
  );
};

export default Vehicle;
