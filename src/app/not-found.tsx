import { Link } from "@/components/atoms";

export default function NotFound() {
  return (
    <div className="bg-temporis-white text-temporis-black font-inter flex flex-col items-center justify-center h-screen text-5xl md:text-6xl lg:text-7xl text-center">
      <b className="text-6xl md:text-9xl mb-2">404</b>
      Página não encontrada
      <Link href="/" className="mt-20 text-xl md:text-3xl">
        Voltar para a página principal
      </Link>
    </div>
  );
}
