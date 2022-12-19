import Button from "./Button";

export default function Header() {
  return (
    <header className="p-8 sticky h-24 top-0 z-10 bg-gray-900/25">
      <nav className="flex items-center">
        <div className="flex-2">
          <Button text="Home" href="/" />
        </div>

        <div className="flex-2">
          <Button text="JWT" href="/jwt" />
          <Button text="OAuth" href="/OAuth" />
          <Button text="Cookies" href="/cookies" />
          <Button text="NextAuth" href="/nextauth" />
        </div>
        <div className="flex-1 text-right">
          <Button
            text="GitHub"
            href="https://github.com/shivoqu/autenticator"
          />
          <Button text="About" href="/about" />
          <Button text="Docs" href="/docs" />
        </div>
      </nav>
    </header>
  );
}
