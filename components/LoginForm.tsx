import { useState } from "react"

interface LoginResponse {
    msg: string
}

const LoginForm = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleForm = async (ev: React.FormEvent) => {
        ev.preventDefault()

        try {
            const result = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const obj: LoginResponse = await result.json()
            if (result.status == 200) {

            } else {

            }
            alert(obj.msg)
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleForm} className="d-flex flex-column w-100 p-3 bg-light bg-gradient shadow rounded" method="POST" action="/api/auth/login">
            <label htmlFor="email">E-mail</label>
            <input className="form-control" type="email" name="email" id="email" onChange={(el) => setEmail(el.target.value)} />
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" id="password" onChange={(el) => setPassword(el.target.value)} />
            <input className="btn btn-outline-success bg-gradient mt-1" type="submit" value="Entrar" />
        </form>
    )
}

export default LoginForm