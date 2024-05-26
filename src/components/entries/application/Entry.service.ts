import { Entry } from "../domain/Entry";
import { EntryRepositoryLocalStorage } from "../infraestructure/Entry.repository";

export const getEntryById = async (id: string) => {
    const {findById} = EntryRepositoryLocalStorage();
    return findById(id);
}

export const getLastEntries = async () => {
    const {findLasts} = EntryRepositoryLocalStorage();
    return findLasts();
}

export const getEntriesByProjectId = async (projectId: string) => {
    const {findAllByProjectId} = EntryRepositoryLocalStorage();
    return findAllByProjectId(projectId);
}

export const createEntry = async (entry: Entry) => {
    const {create} = EntryRepositoryLocalStorage();
    return create(entry);
}
