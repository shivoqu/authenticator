import Button from "./Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-8 sticky top-0 z-10 bg-transparent">
      <div className="flex-1" />
      <Button text="Home" href="/" type="primary" />
      <Button text="JWT" href="/jwt" type="primary" />
      <Button text="OAuth" href="/OAuth" type="primary" />
      <Button text="Cookies" href="/cookies" type="primary" />
      <Button text="NextAuth" href="/nextauth" type="primary" />

      <div className="flex-1" />
      <Button text="GitHub" href="" type="primary" />
      <Button text="About" href="/about" type="primary" />
      <Button text="Docs" href="/docs" type="primary" />
    </header>
  );
}
