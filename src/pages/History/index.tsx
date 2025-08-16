import { HistoryContainer, HistoryList, Status } from "./styles"

function History() {
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>          
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa feita</td>
                            <td>20 m</td>
                            <td>A dois meses</td>
                            <td>
                                <Status statusColor="green">Concluido</Status>
                            </td>
                        </tr>
                         <tr>
                            <td>Tarefa feita</td>
                            <td>20 m</td>
                            <td>A dois meses</td>
                            <td>
                                <Status statusColor="green">Concluido</Status>
                            </td>
                        </tr>
                         <tr>
                            <td>Tarefa feita</td>
                            <td>20 m</td>
                            <td>A dois meses</td>
                            <td>
                                <Status statusColor="yellow">Em andamento</Status>
                            </td>
                        </tr>
                         <tr>
                            <td>Tarefa feita</td>
                            <td>20 m</td>
                            <td>A dois meses</td>
                            <td>
                                <Status statusColor="green">Concluido</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}

export default History