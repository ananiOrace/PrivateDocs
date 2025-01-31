import "./globals.css";
import '@radix-ui/themes/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProviderBootstrap } from './providers';
import Toast from "@/components/providers/toast";
import localFont from "next/font/local"
import { SidebarProvider } from "@/components/providers/sidebarProvider";
import NextTopLoader from "nextjs-toploader";

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
          <SidebarProvider>
            <NextTopLoader />
            {children}
            <Toast />
          </SidebarProvider>
        </ProviderBootstrap>
      </body>
    </html>
  );
}
