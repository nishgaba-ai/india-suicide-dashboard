import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart({ labels, data }: any) {
    return (
        <Doughnut
            options={{
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: { color: "#9ca3af" },
                    },
                },
            }}
            data={{
                labels,
                datasets: [
                    {
                        data,
                        backgroundColor: [
                            "#ef4444",
                            "#22c55e",
                            "#3b82f6",
                            "#f59e0b",
                            "#6b7280",
                        ],
                    },
                ],
            }}
        />
    );
}
