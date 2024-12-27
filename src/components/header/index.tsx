export const Header = () =>{
    return (
        <>
        <header className="flex">
            <div>
                <h1>Logo</h1>
            </div>
            <nav className="flex w-screen justify-center">
                <ul className="flex gap-10">
                    <a href=""><li>Como Ajudar</li></a>
                    <a href=""><li>Descubra</li></a>
                    <a href=""><li>Como Funciona</li></a>
                </ul>
            </nav>
            <div className="flex">
                <button>Busca</button>
                <button>Criar Vaquinha</button>
            </div>
        </header>
        </>
    )
}