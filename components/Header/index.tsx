import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-teal-700 p-6">
      <Link href={"/antonios"}>Antonios</Link>
    </header>
  );
};
