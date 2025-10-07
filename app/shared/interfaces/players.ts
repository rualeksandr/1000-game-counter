export interface Player {
    id: string
    name: string
    scores: number
    bolts: number
    actionHistory: ChangeAccountPayload[]
}

export interface ChangeAccountPayload {
    changeType: 'increase' | 'decrease'
    value: number
}