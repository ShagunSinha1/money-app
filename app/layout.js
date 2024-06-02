import "./globals.css";

export const metadata = {
  title: "Landing-page",
  description: "This is the landing page of money app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
