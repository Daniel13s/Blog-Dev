import { Coffee, CornerRightDown, HeartOff } from "lucide-react"
import { useEffect, useState } from "react"
import Dicas from "./components/Dicas"

function App() {
  const [dicas, setDicas] = useState(JSON.parse(localStorage.getItem("dicas")) || 
  [
    {
      id: 1,
      title: "Para onde vou?",
      description: "Após dominar HTML, CSS e JS, uma ótima opção é o react, bem pedido no mercado Front-End!",
      like: false
    },
    {
      id: 2,
      title: "Como aprender programação?",
      description: "Anote tudo de novo, e tenha um guia de estudo",
      like: false
    },
    {
      id: 3,
      title: "Recomendações de canais!",
      description: "Curso em video, codigo fonte, felipe Rocha, etc...",
      like: false
    },
    {
      id: 4,
      title: "Para onde vou?",
      description: "Após dominar HTML, CSS e JS, uma ótima opção é o react, bem pedido no mercado Front-End!",
      like: false
    },
  ])

  useEffect(()=>{
    localStorage.setItem("dicas", JSON.stringify(dicas))
  }, [dicas])

  function onClickLike(taskId) {
    const newDica = dicas.map((dica) => {
      if (dica.id == taskId){
        return {...dica, like:!dica.like}
      }
      return dica
    })
    setDicas(newDica)
  }

  return (
    <div className="w-screen h-max bg-[#D5CFE1] flex justify-center p-5">
    <header className="w-[700px] max-[400px]:w-screen h-max rounded-[50px] text-center text-[#464655] p-10 max-[700px]:p-5 bg-[#B7B6C1] flex-col">
      <article className=" w-full flex justify-center">
        <h1 className="text-5xl font-bold max-[700px]:text-3xl ">Bem vindo Dev!</h1>
        <Coffee className="size-[50px]" />
      </article>
      <article className="mt-4 flex justify-center max-[700px]:ps-5">
        <p>Aqui vai algumas dicas de programação</p>
        <CornerRightDown className="mt-3" />
      </article>
      <Dicas dicas={dicas} onClickLike={onClickLike}/>
    </header>
    </div>
  )
}

export default App
