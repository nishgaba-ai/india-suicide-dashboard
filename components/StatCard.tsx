export default function StatCard({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="card">
            <h2>{value}</h2>
            <p style={{ color: "#9ca3af" }}>{label}</p>
        </div>
    );
}
