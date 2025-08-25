import {HandPalm, Play} from 'phosphor-react';
import {HomeContainer} from './styles';
import {useForm} from 'react-hook-form';
import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns'
import { NewCycleForm } from './components/NewCycleForm';
import Countdown from './components/Countdown';

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    isActive?: boolean
    startDate?: Date
    interruptedDate?: Date
    finishedDate?: Date
}

function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycledId] = useState<string | null>(null)

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60
    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        if(activeCycle){
            document.title = `${minutes}:${seconds}`
        }
    }, [minutes, seconds, activeCycle])

    
    const task = watch('task')
    const isSubmitDisabled = !task

    function handleCreateNewCycle(data:NewCycleFormData){
        const id = String(new Date().getTime())
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }
        setCycles(() => [...cycles, newCycle])
        setActiveCycledId(id)
        setAmountSecondsPassed(0)

        reset();
    }

    function handleInterruptCycle(){
        setCycles(status => status.map((cycle) => {
            if (cycle.id === activeCycleId){
                return {...cycle, interruptedDate: new Date(), isActive: false}
        }else{
            return cycle
    }})
    )
    setActiveCycledId(null)
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <NewCycleForm/>
                <Countdown activeCycle={activeCycle} setCycles={setCycles} activeCycleId={activeCycleId} />
                { activeCycle ? (
                    <button onClick={handleInterruptCycle} type="button">
                    <HandPalm size={24}/>
                    Começar
                </button>
                ) : (
                    <button type="submit" disabled={isSubmitDisabled}>
                    <Play size={24}/>
                    Começar
                </button>
                ) }
            </form>
        </HomeContainer>
    )
}

export default Home