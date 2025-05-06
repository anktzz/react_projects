import { useState } from "react"

function App(){
  const [color, setColor] = useState("pink")
  return(
    <div className="w-full h-screen"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
          <button className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor:"Red"}}
          onClick={() => setColor("red")}
          >
            Red
          </button>
          <button className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor:"Green"}}
          onClick={() => setColor("green")}
          >
            Green
          </button>
          <button className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor:"Blue"}}
          onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor:"Yellow"}}
          onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor:"Cyan"}}
          onClick={() => setColor("cyan")}
          >
            Cyan
          </button>
          <button className="outline-none px-4 py-1 rounded-xl shadow-lg"
          style={{backgroundColor:"grey"}}
          onClick={() => setColor("grey")}
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  )
}
export default App