
import { Controls, Player } from "@lottiefiles/react-lottie-player"
import { useEffect, useRef, useState } from "react"



const App = () => {
  const [actions, setActions] = useState({
    speed: 1,
    loop: false,
    autoplay: false,
    showControls: false,
    controlsDark: false,
    buttonsControl: [],
  })

  const playerRef = useRef<Player>(null)

  const handlePause = () => playerRef.current?.pause();

  const handlePlay = () => playerRef.current?.play();

  const handleStop = () => playerRef.current?.stop();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    let value: any = null;

    if(name === 'buttonsControl'){

      if(e.target.checked) value = [...actions.buttonsControl, e.target.id]
      else value = [...actions.buttonsControl.filter( btn => btn !==  e.target.id )]
      
    }else{

      value = name === 'speed' ? +e.target.value : e.target.checked
      
      if(name === 'autoplay' && value) handlePlay();
      if(name === 'autoplay' && !value) handleStop();
  
    }
    
    setActions(prev => ({
      ...prev,
      [name]: value
    }))
  }


  useEffect(() => {
    playerRef.current?.setPlayerSpeed(actions.speed === 0 ? 1 : actions.speed)
    playerRef.current?.setLoop(actions.loop)
  }, [actions])


  return (
    <div className="container-app">
      <div className="container-player">
        <Player
          src='https://assets1.lottiefiles.com/packages/lf20_myejiggj.json'
          className="player"
          ref={playerRef}
        >
          <Controls
            visible={actions.showControls}
            buttons={actions.buttonsControl}
            darkTheme={actions.controlsDark}
          />
        </Player>
      </div>

      <div className="container-opt">

        <div className="item-opt">
          <h4 className="title-opt">Active Event to pause player</h4>
          <div className="container-inputs">
            <div className="control-btns">
              <button className="btn" onClick={handlePause}>pause</button>
              <button className="btn" onClick={handlePlay}>play</button>
              <button className="btn" onClick={handleStop}>stop</button>
            </div>
          </div>
        </div>

        <div className="item-opt">
          <h4 className="title-opt">Speed Lottie</h4>
          <div className="container-inputs">
            <div className="control">
              <input type="number" name="speed" min={1} onChange={handleChange} value={actions.speed} />
            </div>
          </div>
        </div>

        <div className="item-opt">
          <h4 className="title-opt">Loop Lottie</h4>
          <label className="switch">
            <input type="checkbox" name="loop" onChange={handleChange} />
            <span className="slider" />
          </label>
        </div>

        <div className="item-opt">
          <h4 className="title-opt">Autoplay Lottie</h4>
          
            <label className="switch">
              <input type="checkbox" name="autoplay" onChange={handleChange} />
              <span className="slider" />
            </label>
          
        </div>

        <div className="item-opt">
          <h4 className="title-opt">Show controls</h4>
            <label className="switch">
              <input type="checkbox" name="showControls" onChange={handleChange} />
              <span className="slider" />
            </label>
        </div>

        <div className="item-opt">
          <h4 className="title-opt">Controls dark theme</h4>
          
            <label className="switch">
              <input type="checkbox" name="controlsDark" onChange={handleChange}  />
              <span className="slider" />
            </label>
          
        </div>

        <div className="item-opt">
          <h4 className="title-opt">Buttons to controls</h4>
          <div className="container-inputs w-100">
            <div className="control">
              <input type="checkbox" name="buttonsControl" onChange={handleChange} id="play" />
              <label htmlFor="play"> play </label>
            </div>
            <div className="control">
              <input type="checkbox" name="buttonsControl" onChange={handleChange} id="repeat" />
              <label htmlFor="repeat"> repeat </label>
            </div>
            <div className="control">
              <input type="checkbox" name="buttonsControl" onChange={handleChange} id="frame" />
              <label htmlFor="frame"> frame </label>
            </div>
            <div className="control">
              <input type="checkbox" name="buttonsControl" onChange={handleChange} id="snapshot" />
              <label htmlFor="snapshot"> snapshot </label>
            </div>
            <div className="control">
              <input type="checkbox" name="buttonsControl" onChange={handleChange} id="background" />
              <label htmlFor="background"> background </label>
            </div>
            <div className="control">
              <input type="checkbox" name="buttonsControl" onChange={handleChange} id="stop" />
              <label htmlFor="stop"> stop </label>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
export default App