import Counter from "./[id]/Counter"

export default function Layout ({children}) {
    return (
        <>
            <header>
                <Counter />
                <small>  Home / Posts </small>
            </header>
            {children}
        </>
    )
}