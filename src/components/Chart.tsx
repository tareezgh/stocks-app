import { useEffect, useState } from "react";
import { fetchHistoricalStockData } from "../fetchData";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { ChartOptions, Chart, LinearScale, CategoryScale } from "chart.js";
import { DeepPartial } from "chart.js/types/utils";
import "chartjs-adapter-date-fns";

// Setup the chart
Chart.register(CategoryScale);
Chart.register(LinearScale);

interface StockData {
  labels: Date[];
  prices: number[];
}

interface MyProps {
  stock: any;
}

const MyChart = (props: MyProps) => {
  const [stockData, setStockData] = useState<StockData>({
    labels: [],
    prices: [],
  });

  useEffect(() => {
    fetchHistoricalStockData(props.stock.ticker).then((res) => {
      console.log(res);
      setStockData(res!);
    });
  }, []);

  const chartOptions: DeepPartial<ChartOptions<"line">> = {
    scales: {
      x: {
        type: "time", // Use time scale for the x-axis
        time: {
          unit: "day", // Display data points by day
          tooltipFormat: "MMM D, YYYY", // Format for the tooltip
          displayFormats: {
            day: "MMM d", // Format for the x-axis labels
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card className="my-auto mx-auto">
      <Card.Body className="p-0">
        <Line
          data={{
            labels: stockData.labels,
            datasets: [
              {
                label: "Stock Price",
                data: stockData.prices,
                fill: false,
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
              },
            ],
          }}
          options={chartOptions}
        />
      </Card.Body>
    </Card>
  );
};

export default MyChart;
