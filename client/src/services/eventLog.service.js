import axios from "axios";

const url = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export const fetchEventLogs = () => axios.get(`${url}/eventmsg`);
