import axios from "axios";
const url = "http://localhost:3001/api";

export const fetchVehicles = () => axios.get(`${url}/vehicle`);

export const fetchVehicleDetails = (id) => axios.get(`${url}/vehicle/${id}`);
