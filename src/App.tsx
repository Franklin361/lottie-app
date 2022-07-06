import { PlayerLottie, ItemCheckBox, ItemCustom, ItemRadio } from "./components"
import { useActionPlayer } from "./hook/useActionPlayer"
import { checkboxes, radios} from './assets/data'

const App = () => {

  const {
    handlePause,
    handlePlay,
    handleStop,
    handleChange,
    speed,
    ...rest
  } = useActionPlayer();


  return (
    <div className="container-app">
      <PlayerLottie {...rest} />

      <div className="container-opt">

        <ItemCustom title="Active Event to pause player">
          <div className="control-btns">
            <button className="btn" onClick={handlePause}>pause</button>
            <button className="btn" onClick={handlePlay}>play</button>
            <button className="btn" onClick={handleStop}>stop</button>
          </div>
        </ItemCustom>

        <ItemCustom title="Speed Lottie">
          <div className="control">
            <input type="number" name="speed" min={1} onChange={handleChange} value={speed} />
          </div>
        </ItemCustom>

        {
          radios.map(({ name, title }) => (
            <ItemRadio key={ name} handleChange={handleChange} {...{name, title}} />
          ))
        }

        <ItemCheckBox handleChange={handleChange} checkboxes={checkboxes} />

      </div>

    </div>
  )
}
export default App

