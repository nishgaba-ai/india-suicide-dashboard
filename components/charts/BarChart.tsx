import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function BarChart({ labels, data }: any) {
    return (
        <Bar
            options={{
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
                        backgroundColor: "#3b82f6",
                    },
                ],
            }}
        />
    );
}
