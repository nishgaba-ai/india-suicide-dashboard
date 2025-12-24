export default function Section({
    title,
    subtitle,
    eyebrow,
    children,
}: {
    title: string;
    subtitle?: string;
    eyebrow?: string;
    children: React.ReactNode;
}) {
    return (
        <section className="section">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}

            <h2 className="section-title">{title}</h2>

            {subtitle && (
                <p className="section-subtitle">{subtitle}</p>
            )}

            <div className="section-body">{children}</div>
        </section>
    );
}
