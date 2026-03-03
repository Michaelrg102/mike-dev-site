function Navbar() {
    return (
        <header className="flex items-center justify-between top-0 left-0 position-fixed bg-black py-3">
            <a href=""><h1 className="text-5xl text-white font-bold ml-10">Mike <samp className="text-sky-500">Dev</samp></h1></a>
            <nav>
                <ul className="flex gap-8 mr-10 text-[var(--color-text)] text-xl">
                    <a href="">Sobre Mim</a>
                    <a href="">Projetos</a>
                    <a href="">Contato</a>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;