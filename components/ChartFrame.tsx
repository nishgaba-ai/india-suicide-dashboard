export default function ChartFrame({
    title,
    children,
}: {
    title?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="chart-frame">
            {title && <h4>{title}</h4>}
            {children}
        </div>
    );
}
