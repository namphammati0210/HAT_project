import { PropTypes } from "prop-types";

import altitudeIcon from "assets/icons/Altitude.svg";
import batteryIcon from "assets/icons/battery_std.svg";
import gpsIcon from "assets/icons/gps_fixed.svg";

const VehicleCard = ({ name, coordinate, altitude, battery }) => (
  <div>
    <div className="flex items-center gap-4  py-4 bg-[#332D41] rounded-tl-lg rounded-tr-lg px-3">
      <div className="w-8 h-8 rounded-full bg-[#D0BCFF]" />
      <p className="uppercase">{name}</p>
    </div>

    <div className="flex flex-col bg-[#4A4458] rounded-bl-lg rounded-br-lg px-3 py-4 h-[165px] justify-between">
      <div className="flex  items-start justify-between">
        <div className="flex gap-4 ">
          <img src={gpsIcon} alt="" />
          <p>Coordinates</p>
        </div>
        <p>{coordinate}</p>
      </div>

      <div className="flex   items-start justify-between">
        <div className="flex gap-4">
          <img src={altitudeIcon} alt="" />
          <p>Altitude</p>
        </div>
        <p>{`${altitude} m`}</p>
      </div>

      <div className="flex   items-start justify-between">
        <div className="flex gap-4">
          <img src={batteryIcon} alt="" />
          <p>Battery</p>
        </div>
        <p>{`${battery} %`}</p>
      </div>
    </div>
  </div>
);

VehicleCard.propTypes = {
  name: PropTypes.string.isRequired,
  coordinate: PropTypes.string.isRequired,
  altitude: PropTypes.number.isRequired,
  battery: PropTypes.number.isRequired,
};

export default VehicleCard;
