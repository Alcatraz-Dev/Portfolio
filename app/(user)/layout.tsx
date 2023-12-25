import Providers from "@/components/Providers/Providers";
import { constructMetadata } from "@/lib/utils";
import "../../styles/globals.css";


export const metadata = constructMetadata()

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <main className="overflow-x-hidden bg-gray-100 text-zinc-800 dark:bg-zinc-800 dark:text-white overflow-y-scroll scrollbar-hide">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
