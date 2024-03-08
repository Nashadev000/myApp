import Layaut from "./components/Layaut"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="bg-secundary min-h-screen ">
        <Navbar> </Navbar>
        <Layaut>
          <p>Hola soy el contenido</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt in animi voluptate repellat obcaecati eius rerum eos ratione fuga cumque! Dolorem magni cum optio ad odit et laborum veniam nostrum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus veritatis excepturi minus repudiandae nesciunt officiis doloremque fuga illum quis possimus. Sed inventore deserunt officia id delectus cupiditate pariatur ex ab?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt in animi voluptate repellat obcaecati eius rerum eos ratione fuga cumque! Dolorem magni cum optio ad odit et laborum veniam nostrum.</p>
          <p></p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt in animi voluptate repellat obcaecati eius rerum eos ratione fuga cumque! Dolorem magni cum optio ad odit et laborum veniam nostrum.</p>
        </Layaut>

      </div>
    </>
  )
}

export default App
