import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/app/Components/theme-provider";
import Nav from "./Components/Nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata = {
  title: "Sluch | Full Stack Developer",
  description:
    "Ahmed (Sluch) — Professional MERN Stack Developer specializing in high-performance, scalable web applications. Explore my projects, services, and get in touch.",
  keywords: ["Full Stack Developer", "MERN Stack", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Ahmed Sluch" }],
  openGraph: {
    title: "Sluch | Full Stack Developer",
    description: "Professional MERN Stack Developer — Building exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased scroll-smooth bg-[#000319]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
