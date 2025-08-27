import { HandPalm, Play } from 'phosphor-react'
import { HomeContainer } from './styles'
import { useForm } from 'react-hook-form'
import { useState, createContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { NewCycleForm } from './components/NewCycleForm'
import Countdown from './components/Countdown'

/* ------------------ Tipos ------------------ */
interface Cycle {
  id: string
  task: string
  minutesAmount: number
  isActive?: boolean
  startDate?: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCyclesAsFinashed: () => void
}

/* ------------------ Contexto ------------------ */
export const CyclesContext = createContext({} as CyclesContextType)

/* ------------------ Componente ------------------ */
function Home() {
  const { handleSubmit, watch, reset } = useForm()

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycledId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutes = String(Math.floor(currentSeconds / 60)).padStart(2, '0')
  const seconds = String(currentSeconds % 60).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: any) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycledId(id)
    setAmountSecondsPassed(0)
    reset()
  }

  function handleInterruptCycle() {
    setCycles((status) =>
      status.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date(), isActive: false }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycledId(null)
  }

  function markCurrentCyclesAsFinashed() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCyclesAsFinashed }}
        >
          <NewCycleForm />
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <button onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <button type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </HomeContainer>
  )
}

export default Home
