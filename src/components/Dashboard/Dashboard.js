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
  PieChart,
  Pie,
  AreaChart,
  Area,
} from "recharts";
import "./Dashboard.css";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:my-12 my-4 justify-center items-center px-12 gap-2">
      {/* line chart revenue  */}
      <div className="revenue-line">
        <h2 className="text-3xl text-center font-semibold text-purple-600 my-4">
          6 Month sell Data line Chart
        </h2>
        <LineChart
          width={600}
          height={300}
          data={data}
          className="responsive"
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
        <BarChart width={600} height={300} data={data} className="responsive">
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis dataKey="investment" />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="sell" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
      {/* pie chart sell data  */}
      <div className="pie-data">
        <h2 className="text-3xl text-center font-semibold text-purple-600 my-4">
          6 Month sell Data bar chart
        </h2>
        <PieChart width={730} height={250} className="responsive">
          <Pie
            data={data}
            dataKey="sell"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="sell"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      {/* area multiple  line chart  */}
      <div className="areaLineChart">
        <h3 className="text-3xl text-center font-semibold text-purple-600 my-4">
          6 Month sell dashboard Area chart
        </h3>
        <AreaChart
          className="responsive"
          width={630}
          height={250}
          data={chart}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis dataKey="investment" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};
export default Dashboard;
