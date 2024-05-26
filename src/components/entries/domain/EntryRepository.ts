import { Entry, EntryCard } from "./Entry";

export interface EntryRepository {
    findById(id: string): Promise<Entry | null>;
    findLasts(): Promise<EntryCard[]>;
    findAllByProjectId(projectId: string): Promise<EntryCard[]>;
    create(entry: Entry): Promise<void>;
}