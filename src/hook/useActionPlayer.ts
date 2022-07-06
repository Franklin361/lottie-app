import { useRef, useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const useActionPlayer = () => {

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

        if (name === 'buttonsControl') {

            (e.target.checked) 
                ? value = [...actions.buttonsControl, e.target.id]
                : value = [...actions.buttonsControl.filter(btn => btn !== e.target.id)]

        } else {

            value = name === 'speed' ? +e.target.value : e.target.checked

            if (name === 'autoplay' && value) handlePlay();
            if (name === 'autoplay' && !value) handleStop();

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

    return {
        handlePause,
        handlePlay,
        handleStop,
        handleChange,
        playerRef,
        ...actions
    }
}