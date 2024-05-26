export interface Project {
    id: string;
    name: string;
    description: string;
    technology: string[];
    status: ProjectStatus;
    startDate: Date;
}

export interface ProjectCard {
    id: string;
    name: string;
    description: string;
    status: ProjectStatus;
    startDate: Date;
}



export enum ProjectStatus {
    Active = 'active',
    Inactive = 'inactive',
    Completed = 'completed',
}