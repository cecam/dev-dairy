export interface Entry {
    id: string;
    projectId: string;
    title: string;
    content: string;
    createdAt: Date;
    summary: string;
    challenges: string;
    learnings: string;
    progress: string;
}

export interface EntryCard {
    id: string;
    projectTitle: string;
    title: string;
    summary: string;
    createdAt: Date;
}