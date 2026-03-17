export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-16 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ankit Ku Chaudhary. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground font-mono">
          Built with Next.js & React
        </p>
      </div>
    </footer>
  );
}
