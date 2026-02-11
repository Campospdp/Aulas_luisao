<<<<<<< HEAD
import './styles/theme.css'
import './styles/global.css'
export function App() {

  return (
    <>
      <h1>Olá mundo</h1>
      <p>Vai Corinthians</p>
      <input />
      <button className="square">✅</button>
    </>
  )
}

//export default App
=======
// src/App.jsx
import './theme.css';
import './global.css';

function App() {
  return (
    <main>
      <h1>Acesso ao Sistema</h1>
      <p>Insira os seus dados para continuar.</p>
      
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Palavra-passe" />
      
      <button>Entrar</button>
    </main>
  );
}

export default App;
>>>>>>> f1ca418 (login dark mode concluído)
