export default function TextBlock({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="text-block">
            {children}
        </div>
    );
}
