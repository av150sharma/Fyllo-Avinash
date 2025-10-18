import React from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { data } from "../../result"
import "./FertilizerChart.css" // Add CSS file for consistent styling

function FertilizerChart() {
  // Aggregate data by year
  const yearlyData = data.reduce((acc, curr) => {
    const yearItem = acc.find((item) => item._year === curr._year)
    if (yearItem) {
      yearItem.requirement += parseFloat(curr.requirement_in_mt_)
      yearItem.availability += parseFloat(curr.availability_in_mt_)
    } else {
      acc.push({
        _year: curr._year,
        requirement: parseFloat(curr.requirement_in_mt_),
        availability: parseFloat(curr.availability_in_mt_),
      })
    }
    return acc
  }, [])

  return (
    <div className="fertilizer-chart">
      <h3 className="chartTitle">Fertilizer Availability vs Requirement (per Year)</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={yearlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="requirement"
            stroke="#60AC4A"
            name="Requirement (MT)"
          />
          <Line
            type="monotone"
            dataKey="availability"
            stroke="#FF6347"
            name="Availability (MT)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FertilizerChart
