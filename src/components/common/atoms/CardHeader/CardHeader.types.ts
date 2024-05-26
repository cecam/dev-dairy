export interface CardHeaderProps {
    title: string;
    link?: string;
    type: CardHeaderType;
}

export enum CardHeaderType {
    CARD = "card",
    ENTRY = "entry",
}