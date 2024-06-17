import { useState } from "react";
import { Link } from "react-router-dom";
import Dashoboard from "../components/Dashboard/Dashboard";

function DashboardPage() {
  const [recordList, setRecordList] = useState([]);

  return (
    <div className="container">
      <Dashoboard />
    </div>
  );
}

export default DashboardPage;
