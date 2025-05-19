import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "../Context/AuthContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const { user, signInWithOtp } = useAuth()

  useEffect(() => {
    if (user) {
      navigate("/")  // Si ya hay usuario logueado, redirige a home
    }
  }, [user, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return alert("Por favor, ingresa tu email")

    const { error } = await signInWithOtp(email)
    if (error) {
      alert("Error al enviar el enlace de login: " + error)
    } else {
      alert("Revisa tu correo para el enlace de acceso")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
