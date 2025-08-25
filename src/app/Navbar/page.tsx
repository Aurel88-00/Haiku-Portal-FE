import Link from "next/link";

export default function Navbar() {
  const isAuthenticated = false;
  return (
    <div className="relative bg-card border-b border-border/50">
      <nav className="flex justify-between items-center m-2">
       <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center cursor-pointer space-x-3 hover:opacity-80 transition-[var(--transition-zen)]">
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-glow)] rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">俳</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Haiku Portal</span>
            </Link>
            <aside>
              { isAuthenticated ? <Link 
                href="/Auth" 
                className="text-muted-foreground cursor-pointer hover:text-foreground transition-[var(--transition-zen)] text-sm"
              >
                Login
              </Link> :<Link 
                href="/" 
                className="text-muted-foreground cursor-pointer hover:text-foreground transition-[var(--transition-zen)] text-sm"
              >
                ← Back to App
              </Link>}
            </aside>
          </div>
        </div>
      </nav>
    </div>
  );
}
