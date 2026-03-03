function Home() {
    return (
        <main className="flex items-center justify-center min-h-screen">
            <section className="flex flex-col border-5 border-cyan-400 bg-zinc-800 rounded-4xl px-50 py-40">
                <h1 className=" text-center text-blue-500 font-bold text-7xl">Mike Dev Site</h1>

                <h2 className="text-center text-[var(--color-text)] text-5xl font-bold mt-10">Meu Primeiro Site</h2>

                <p className="text-center text-2xl text-[var(--color-text)] mt-10">Este é meu primeiro site, o mesmo será utilizado para futuras atualizações,<br/>podendo ser do próprio site ou sobre novos projetos. Espero que gostem!</p>
            </section>
        </main>
    )
}

export default Home