import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

let player = document.getElementsByClassName("playerCube")

export default function Block ({height, counter}) {
  const navigate = useNavigate()
  const [moveBlock, setMove] = useState(1280)
  let element
  let idName = `evilBlock${counter}`
  async function moving() {
    if (moveBlock - 64 >= 64) {
      await setMove(moveBlock - 64)
      switch (height) {
        case 1:
          if ((player[0].offsetLeft === moveBlock - 64) && (player[0].offsetTop === 320)) {
            navigate("../GameOver")
          }
          break
        case 2:
          if ((player[0].offsetLeft === moveBlock - 64) && (player[0].offsetTop >= 256)) {
            navigate("../GameOver")
          }
          break
        case 3:
          if ((player[0].offsetLeft === moveBlock - 64) && (player[0].offsetTop >= 192)) {
            navigate("../GameOver")
          }
          break
      }
    } else {
      document.getElementById(idName).remove()
    }
  }
  useEffect(() => {
    setTimeout(moving, 100)
  })
  switch (height) {
    case 1:
      element = <div className="evilBlock" id={idName} style={{left: `${moveBlock}px`}}><div className="evilBlockBottom" /></div>
      break
    case 2:
      element = <div className="evilBlock" id={idName} style={{left: `${moveBlock}px`}}><div className="evilBlockMiddle" /><div className="evilBlockBottom" /></div>
      break
    case 3:
      element = <div className="evilBlock" id={idName} style={{left: `${moveBlock}px`}}><div className="evilBlockTop" /><div className="evilBlockMiddle" /><div className="evilBlockBottom" /></div>
      break
    default:
      element = <></>
  }

  return (
    <>
      {element}
    </>
  )
}