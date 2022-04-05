import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
const Dashboard = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    const url = "data.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  const data = [...chart];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 justify-center px-12 gap-2">
      {/* line chart revenue  */}
      <div className="revenue-line">
        <h2 className="text-3xl text-center font-semibold text-purple-600 my-4">
          6 Month sell Data line Chart
        </h2>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Tooltip />
        </LineChart>
      </div>
      {/* bar chart  */}
      <div className="barChart">
        <h3 className="text-3xl text-center font-semibold text-purple-600 my-4">
          6 Month sell dashboard white Bar-chart
        </h3>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis dataKey="investment" />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="sell" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};
export default Dashboard;
