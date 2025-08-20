import {Play} from 'phosphor-react';
import {HomeContainer, FormContainer, CountdownContainer, Separator, TaskInput, MinutesAmountInput} from './styles';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod';
import { useState } from 'react';

const newCycleFormvalidationSchema = zod.object({
        task: zod.string().min(4, 'Informe a tarefa'),
        minutesAmount: zod.number().min(5, 'O intervalo precisa ser no minimo 60 minutos').max(60, 'O intervalo precisa ser no máximo 60 minutos')
    })

type NewCycleFormData = zod.infer<typeof newCycleFormvalidationSchema>

interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    isActive?: boolean;
}

function Home() {
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycledId] = useState<string | null>(null)
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormvalidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })
    
    const task = watch('task')
    const isSubmitDisabled = !task

    function handleCreateNewCycle(data:NewCycleFormData){
        const id = String(new Date().getTime())
        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
        }

        setCycles((state) => [...cycles, newCycle])
        setActiveCycledId(id)

        reset();
    }

    console.log(cycles)

    // function resetForm() {
    //     setTask('');
    // }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar Em</label>
                    <TaskInput
                        type="text" 
                        id="task" 
                        list='task-suggestions' 
                        placeholder='Dê um nome para o seu Projeto' 
                        // value={task} 
                        // onChange={e => setTask(e.target.value)}
                        {...register('task')}
                    />
                    <datalist id='task-suggestions'>
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                    </datalist>
                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput
                        type="number" 
                        id="minutesAmount" 
                        placeholder='00' 
                        step={5} 
                        min={5} 
                        max={60}
                        {...register('minutesAmount', {valueAsNumber: true})}
                    />
                <span>minutos.</span>   
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>
                <button type="submit" disabled={isSubmitDisabled}>
                    <Play size={24}/>
                    Começar
                </button>
            </form>
        </HomeContainer>
    )
}

export default Home