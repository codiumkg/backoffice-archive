import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import { ReactQueryProvider } from "@/components/ReactQueryProvider/ReactQueryProvider";

import "./globals.css";
import { ConfigProvider, theme } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codium Office",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            components: {
              Select: {
                colorBgContainer: "var(--primary-color)",
                colorBgElevated: "var(--secondary-color)",
                colorBgBase: "var(--secondary-color)",
                colorPrimaryBg: "var(--primary-color)",
                colorPrimaryBorder: "var(--highlight-color)",
                colorBorder: "var(--highlight-color)",
                colorPrimary: "var(--secondary-color)",
                colorText: "var(--text-color)",
                colorBgTextActive: "var(--text-color)",
              },
            },
          }}
        >
          <ReactQueryProvider>
            <Toaster />
            {children}
          </ReactQueryProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
