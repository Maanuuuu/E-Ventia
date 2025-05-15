import { useAuth } from '../Context/AuthContext'

export default function Home() {
  const { user, signOut } = useAuth()

  // No necesitas manejar la promesa con then/catch si no quieres,
  // pero puedes agregar try/catch para control de errores
  const handleLogout = async () => {
    try {
      await signOut()
      console.log('User logged out')
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  return (
    <div className="home">
      <h1>Homeee</h1>
      {user && <p>Bienvenido, {user.email}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
