import { useState,} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const storedUsers = localStorage.getItem('users')
    const initialUsers = storedUsers ? JSON.parse(storedUsers) : [];

    const [users, setUsers] = useState(initialUsers)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [loggedIn, setLoggedIn] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = users.find(u => u.email === formData.email && u.password === formData.password)
        if (user) {
            console.log('ok')
            setLoggedIn(true)
        } else {
            console.log('error')
        }
    };

    return (
        <div className="container mt-5">
            <h2 className='col-6 m-auto text-center'>Inicio de sesión</h2>
            <form onSubmit={handleSubmit} className='col-6 m-auto'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico:</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email}
                        onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password}
                        onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
            {loggedIn && (
                <div>
                    <p>Inicio de sesión exitoso. Redirigiendo...</p>
                    {/* Redirigir a la página de inicio */}
                    <Link to="/home">Ir a la página de inicio</Link>
                </div>
            )}
        </div>
    )
}

export default Login
