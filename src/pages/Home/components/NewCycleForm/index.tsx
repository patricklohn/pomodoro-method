import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import * as zod from 'zod';

const newCycleFormvalidationSchema = zod.object({
        task: zod.string().min(4, 'Informe a tarefa'),
        minutesAmount: zod.number().min(5, 'O intervalo precisa ser no minimo 60 minutos').max(60, 'O intervalo precisa ser no máximo 60 minutos')
    })

type NewCycleFormData = zod.infer<typeof newCycleFormvalidationSchema>


export function NewCycleForm() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormvalidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })
    return (
        <FormContainer>
                    <label htmlFor="task">Vou trabalhar Em</label>
                    <TaskInput
                        type="text" 
                        id="task" 
                        list='task-suggestions' 
                        placeholder='Dê um nome para o seu Projeto' 
                        disabled={!!activeCycle}
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
                        disabled={!!activeCycle}
                        {...register('minutesAmount', {valueAsNumber: true})}
                    />
                <span>minutos.</span>   
                </FormContainer>
    )
}