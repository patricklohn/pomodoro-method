import {Play} from 'phosphor-react';
import {HomeContainer, FormContainer, CountdownContainer, Separator, TaskInput, MinutesAmountInput} from './styles';
import { useState } from 'react';

function Home() {
    const [task, setTask] = useState('');

    function resetForm() {
        setTask('');
    }

    return (
        <HomeContainer>
            <form onSubmit={alert}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar Em</label>
                    <TaskInput
                        type="text" 
                        id="task" 
                        list='task-suggestions' 
                        placeholder='Dê um nome para o seu Projeto' 
                        value={task} 
                        onChange={e => setTask(e.target.value)}
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
                <button type="submit" disabled={!task}>
                    <Play size={24}/>
                    Começar
                </button>
            </form>
        </HomeContainer>
    )
}

export default Home