import React, {useEffect, useState} from "react";
import Block from "../components/block";

let counter = 0

export default function Game () {
  document.addEventListener("keydown", logKey);
  let xAxisPlayer = 64
  let yAxisPlayer = 320
  let xAxisComputer = 1160
  let yAxisComputer = 50
  function logKey(e) {
    if (e.key === "ArrowRight") {
      if (xAxisPlayer + 64 <= 1280) {
        xAxisPlayer += 64
        document.documentElement.style.setProperty("--xAxisPlayer", `${xAxisPlayer}px`)
      }
      if (xAxisComputer - 64 >= 1160) {
        xAxisComputer -= 64
        document.documentElement.style.setProperty("--xAxisComputer", `${xAxisComputer}px`)
      }
    } else if (e.key === "ArrowLeft") {
      if (xAxisPlayer - 64 >= 64) {
        xAxisPlayer -= 64
        document.documentElement.style.setProperty("--xAxisPlayer", `${xAxisPlayer}px`)
      }
      if (xAxisComputer + 64 < 2120) {
        xAxisComputer += 64
        document.documentElement.style.setProperty("--xAxisComputer", `${xAxisComputer}px`)
      }
    } else if (e.key === "ArrowUp") {
      if (yAxisPlayer - 64 >= 50) {
        yAxisPlayer -= 64
        document.documentElement.style.setProperty("--yAxisPlayer", `${yAxisPlayer}px`)
        setTimeout(() => {
          yAxisPlayer += 64
          document.documentElement.style.setProperty("--yAxisPlayer", `${yAxisPlayer}px`)
        }, 500)
      }
      if (yAxisComputer + 64 < 1010) {
        yAxisComputer += 64
        document.documentElement.style.setProperty("--yAxisComputer", `${yAxisComputer}px`)
      }
    }
  }

  const [createElement, setCreate] = useState([])

  function creating() {
    let height = Math.floor(Math.random() * 4)
    setCreate((old) => [...old, React.createElement(Block, {height, counter})])
  }

  useEffect(() => {
    let time = ((Math.floor(Math.random() * 6)) * 1000)
    if (time === 0) {
      time += 1000
    }
    counter += 1
    setTimeout(creating, time)
  })

  return (
    <div id="game">
      <div className="playingFieldLeft" />
      {/*<div className="playingFieldRight" />*/}
      <div className="playerCube" id="playerCube" />
      {/*<div className="computerCube" />*/}
      {createElement}
    </div>
  );
}