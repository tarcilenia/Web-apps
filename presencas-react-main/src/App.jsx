
import ListComponent from './Components/ListComponent'
function App() {

  return (
    <div className='App'>
      <div className='container-md bg-light py-5 px-5' id='mainContainer'>
        <div className='text-center mb-5'>
          <h3>Lista de Presenças</h3>
          <h4>LECC 31</h4>
        </div>
        <ListComponent />
      </div>
    </div>


  )
}

export default App
