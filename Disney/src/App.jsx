import './App.css'
import  SingUp  from "./components/singup/SingUp";
function App() {
  fetch('https://api.disneyapi.dev/character')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  return (

    <SingUp/>
  )
}

export default App
