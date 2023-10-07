import Link from 'next/link'
import classes from "./Navigation.module.css"

export function Navigation () {
    const LINKS = [
        { name:"Home", route: "/" },
        { name:"About", route: "/about" }
    ]
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.navigation}>
                    { LINKS.map((link) => (
                        <li>
                            <Link href={link.route}>
                                {link.name}
                            </Link>
                        </li>
                        )
                    )}
                </ul>
            </nav>
      </header>
    )
}