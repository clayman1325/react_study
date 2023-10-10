import { AuthButtonServer } from "../components/auth-button-server";

export default function Login () {
    return (
        <section class="grid place-content-center min-h-screen ">
            <h1 class="text-xl font-bold mb-4"> LogIn to Eng-X </h1>
            <AuthButtonServer />
        </section>
    )
}