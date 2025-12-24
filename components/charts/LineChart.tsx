import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

export default function LineChart({ labels, data }: any) {
    return (
        <Line
            options={{
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { color: "#9ca3af" } },
                    y: { ticks: { color: "#9ca3af" } },
                },
            }}
            data={{
                labels,
                datasets: [
                    {
                        data,
                        borderColor: "#ef4444",
                        backgroundColor: "rgba(239,68,68,0.2)",
                        fill: true,
                        tension: 0.35,
                    },
                ],
            }}
        />
    );
}
