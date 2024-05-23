export interface Project {
    id: string;
    name: string;
    description: string;
    technology: string[];
    status: ProjectStatus;
}

export enum ProjectStatus {
    Active = 'active',
    Inactive = 'inactive',
    Completed = 'completed',
}