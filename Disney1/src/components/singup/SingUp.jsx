import { useState } from 'react';

const SingUp = () => {
    const storedUsers = localStorage.getItem('users');
    const initialUsers = storedUsers ? JSON.parse(storedUsers) : [];

    const [users, setUsers] = useState(initialUsers);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        const updatedUsers = [...users, formData];
        setUsers(updatedUsers); 
        localStorage.setItem('users', JSON.stringify(updatedUsers)); 
        console.log(JSON.parse(localStorage.getItem('users')))
    };

    return (
        <div className="container mt-5">
            <h2 className='col-6 m-auto text-center'>Registro</h2>
            <form onSubmit={handleSubmit} className='col-6 m-auto'>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Nombre de usuario:</label>
                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
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
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
};

export default SingUp;
