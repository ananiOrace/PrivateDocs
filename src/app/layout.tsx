import "./globals.css";
import '@radix-ui/themes/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Providers } from './providers';
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
