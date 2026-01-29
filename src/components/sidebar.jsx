"use client";

import Link from "next/link";
import { Home, BarChart, Settings } from "lucide-react";
import clsx from "clsx";

export default function Sidebar({ collapsed }) {
  return (
    <aside
      className={clsx(
        "hidden md:flex h-screen flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >

      <nav className="flex flex-col gap-1 px-2">
        <Link href="/" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
          <Home className="h-4 w-4" />
          {!collapsed && <span>Home</span>}
        </Link>

        <Link href="/analytics" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
          <BarChart className="h-4 w-4" />
          {!collapsed && <span>Analytics</span>}
        </Link>

        <Link href="/settings" className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-muted">
          <Settings className="h-4 w-4" />
          {!collapsed && <span>Settings</span>}
        </Link>
      </nav>

      {!collapsed && (
        <div className="mt-auto p-4 text-xs text-muted-foreground">
          © synkcode
        </div>
      )}
    </aside>
  );
}
