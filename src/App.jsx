import { useState } from 'react'
import Perfil from './components/Perfil'

import ReposList from './components/ReposList'

function App() {
  const[formIsVisible, setFormVisible]= useState(true);
  const [nomeUsuario, setNomeUsuario ] = useState(''); 

  return (
    <>
    <div className="nomeInput">
    <p className="nomeInputTexto"> Insira seu nome de usuário :</p>
    <input type="text" placeholder='Nome de Usuário' onBlur={(e) => setNomeUsuario(e.target.value)} />
    <button></button>
    </div>
    

    {nomeUsuario.length > 4 &&(
        <div >
          <Perfil nomeUsuario={nomeUsuario}
          />
          <ReposList nomeUsuario={nomeUsuario}/>
        </div>
      
    )}
    
    </>
  )
}

export default App
