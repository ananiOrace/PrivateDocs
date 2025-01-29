import "./globals.css";
import '@radix-ui/themes/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProviderBootstrap } from './providers';
import Toast from "@/components/toast";
import localFont from "next/font/local"

const globalFont = localFont({
  src: './fonts/Urbanist.ttf'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${globalFont.className}`}
      >
        <ProviderBootstrap>
          {children}
          <Toast />
        </ProviderBootstrap>
      </body>
    </html>
  );
}
