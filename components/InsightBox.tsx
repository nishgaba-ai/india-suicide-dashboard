export default function InsightBox({
    title = "Key Insight",
    children,
}: {
    title?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="insight-box">
            <div className="insight-accent" />
            <div>
                <h4>{title}</h4>
                <p>{children}</p>
            </div>
        </div>
    );
}
