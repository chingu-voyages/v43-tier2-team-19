import axios from "axios"
import React, { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import moment from "moment/moment"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const Chart = ({ coin }) => {
  const [historicalData, sethistoricalData] = useState()

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=7`
    )
    sethistoricalData(data.prices)
  }

  useEffect(() => {
    fetchHistoricalData()
  }, [])

  if (!historicalData) {
    return <div>Loading...</div>
  }

  const coinChartData = historicalData.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }))

  const options = {
    responsive: true,
  }

  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: coin.name,
        data: coinChartData.map((value) => value.y),
        borderColor: "rgb(53, 162, 235)",
      },
    ],
  }

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default Chart
