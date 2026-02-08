// FILE: src/components/layout/PageLayout.tsx

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-10">
      {children}
    </div>
  );
}
