import {useNavigate} from "react-router-dom";

export default function GameOver () {
  const navigate = useNavigate()
  function restart () {
    document.documentElement.style.setProperty("--xAxisPlayer", `64px`)
    document.documentElement.style.setProperty("--yAxisPlayer", `320px`)
    navigate("../")
  }
  return (
    <>
      <h1>You Lost !</h1>
      <button onClick={() => restart()}>Restart Game</button>
    </>
  )
}