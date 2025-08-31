import type { Cycle } from "./reducer";

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
    MARK_CURRENTE_CYCLE_AS_FINISH = 'MARK_CURRENTE_CYCLE_AS_FINISH'
}

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE, payload: newCycle
    }
}

export function interruptCurrentCycleAction(activeCycleId: string) {
    return {
        type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
        payload: activeCycleId,
    }
}

export function markCurrentCycleAsFinishedAction(activeCycleId: string) {
    return{
      type: ActionTypes.MARK_CURRENTE_CYCLE_AS_FINISH,
      payload: activeCycleId,
    }
}