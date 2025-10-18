import React from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts"
import { data } from "../../result"
import "./TopRequiredFertilizers.css" // Optional: create CSS for consistent styling

function TopRequiredFertilizers() {
  // Get top 5 fertilizers by requirement
  const topRequired = [...data]
    .sort((a, b) => parseFloat(b.requirement_in_mt_) - parseFloat(a.requirement_in_mt_))
    .slice(0, 5)

  return (
    <div className="top-required-chart">
      <h3 className="chartTitle">Top 5 Fertilizers by Requirement</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={topRequired} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="requirement_in_mt_" fill="#60AC4A" name="Requirement (MT)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TopRequiredFertilizers
