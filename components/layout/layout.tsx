import { ReactNode } from "react";
import Navbar from "./navbar";

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
}
