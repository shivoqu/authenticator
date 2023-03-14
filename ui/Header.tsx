import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
      <header className="p-4 sticky h-16 top-0 z-10 bg-gray-900/10">
        <nav className="flex items-center">
          <div className="flex-2">
            <HeaderLink text="Home" href="/" />
          </div>
          <div className="flex-2 gap-2">
            <HeaderLink text="JWT" href="/jwt" />
            <HeaderLink text="OAuth" href="/oauth" />
            <HeaderLink text="Cookies" href="/cookies" />
            <HeaderLink text="NextAuth" href="/nextauth" />
          </div>
          <div className="flex-1 text-right">
            <HeaderLink
              text="GitHub"
              href="https://github.com/shivoqu/autenticator"
            />
            <HeaderLink text="About" href="/about" />
          </div>
        </nav>
      </header>
  );
}
