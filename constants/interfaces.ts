
export interface IconProps {
    color?: string;
    size?: number;
}

export interface UserInterface {
    id: string
    name: string
    email: string
    token: string
}

export interface TimerInterface {
    ticketId: string
    time: number
    isRunning: boolean
    show: boolean
}

