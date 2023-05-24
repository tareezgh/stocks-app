import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";

// Setup the chart
import { LinearScale } from "chart.js";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
Chart.register(LinearScale);

const MyChart = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Stock Price",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card className="my-auto mx-auto">
      <Card.Body className="p-0">
        <Line data={chartData} options={chartOptions} />
      </Card.Body>
    </Card>
  );
};

export default MyChart;
