import './App.css';

function App() {
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
  return (
    <>
      <div className="playingFieldLeft" />
      {/*<div className="playingFieldRight" />*/}
      <div className="playerCube" />
      {/*<div className="computerCube" />*/}
    </>
  );
}

export default App;