import Card from "../ui/Card";

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-center flex-wrap  large:max-w-2xl medium:max-w-md">
        <Card
          title="JWT"
          logo="🌸"
          desc="Industry standard method for secure claim representation."
        />
        <Card
          title="OAuth"
          logo="⭐"
          desc="A protocol to allow secure authorization in applications."
        />
        <Card
          title="Cookies"
          logo="🍪"
          desc="A unique identifier is created on the server-side."
        />
      </div>
    </>
  );
}
