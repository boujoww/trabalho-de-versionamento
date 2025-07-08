import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-2xl font-bold text-center mb-6">
          Seja bem-vindo ao Trabalho de Versionamento de Software!
        </h1>

        <div className="h-6" />

        <nav className="flex flex-wrap gap-6 justify-center">
          <Link href="/contato" className="text-yellow-400 hover:underline">
            Contatos
          </Link>
          <Link href="/produtos" className="text-grey-100 hover:underline">
            Produtos
          </Link>
          <Link href="/clientes" className="text-yellow-400 hover:underline">
            Clientes
          </Link>
          <Link href="/sobre-nos" className="text-grey-100 hover:underline">
            Sobre Nós
          </Link>
          <Link href="/eventos" className="text-yellow-400 hover:underline">
            Eventos
          </Link>
        </nav>
      </main>
    </>
  );
}
