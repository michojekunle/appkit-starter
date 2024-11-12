import Link from "next/link";
import { Menu, Code, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-8 lg:px-16">
      <div className="container flex justify-between h-14 items-center">
        <div className="mr-4 hidden md:flex gap-4">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Code className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Nextjs AppKit Starter
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/examples"
            >
              Examples
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/playground"
            >
              Playground
            </Link>
          </nav>
        </div>
        <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center gap-3">
            <Link
              href="https://github.com/michojekunle/appkit-starter"
              target="_blank"
              rel="noreferrer"
            >
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <w3m-button size="md"/>
          </nav>
        </div>
      </div>
    </header>
  );
}
