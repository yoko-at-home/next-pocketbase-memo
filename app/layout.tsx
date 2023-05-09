/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import "./output.css";

const items = [
  { href: "/", label: "Home" },
  { href: "/notes", label: "Notes" },
  { href: "/tictac", label: "Tic-tac-toe" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            {items.map(({ href, label }) => {
              return (
                <Link
                  key={href}
                  href={href}
                  className="m-2 whitespace-nowrap text-2xl font-medium text-green-300 lg:text-3xl"
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
