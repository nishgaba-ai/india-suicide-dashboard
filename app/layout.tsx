import "./globals.css";

export const metadata = {
  title: "India’s Suicide Crisis Dashboard",
  description: "Trends, demographics, causes, and policy analysis (2013–2023)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
