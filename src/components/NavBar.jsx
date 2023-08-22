import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center bg-slate-900 px-4 py-2 ">
            <ul id="links" className="flex items-end gap-11">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl font-bold">Tourbeck</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/viagens">
                        <h1>Viagens</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/add">
                        <h1>Adicionar Viagem</h1>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <h1>Pesquisar</h1>
                    </Link>
                </li>
            </ul>
            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuario" />
            </div>
        </nav>
    );
}
