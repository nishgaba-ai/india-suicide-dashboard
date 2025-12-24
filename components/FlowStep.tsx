export default function FlowStep({
    icon,
    title,
    text,
}: {
    icon: string;
    title: string;
    text: string;
}) {
    return (
        <div className="card">
            <h3>
                {icon} {title}
            </h3>
            <p style={{ color: "#9ca3af" }}>{text}</p>
        </div>
    );
}
