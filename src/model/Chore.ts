export interface Chore {
    choreName: string;
    choreId?: number;
    choreDescription?: string;
    isCompleted: boolean;
    lastCompleted?: string;
}