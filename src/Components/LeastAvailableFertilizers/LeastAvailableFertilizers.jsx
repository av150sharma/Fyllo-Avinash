


import React from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { data } from "../../result"
import "./LeastAvailableFertilizers.css"

function LeastAvailableFertilizers() {
  const leastAvailable = [...data]
    .map(item => ({
      ...item,
      availability_in_mt_: parseFloat(item.availability_in_mt_) || 0, // ✅ Convert to number
    }))
    .sort((a, b) => a.availability_in_mt_ - b.availability_in_mt_)
    .slice(0, 5)

  return (
    <div className="chart-container">
      <h3>Top 5 Fertilizers with Least Availability</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={leastAvailable}>
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="availability_in_mt_" fill="#387908" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LeastAvailableFertilizers
