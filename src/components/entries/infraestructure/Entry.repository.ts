import { Entry } from "../domain/Entry";
import { EntryRepository } from "../domain/EntryRepository";

const STORAGE_KEY = 'entries';

export const EntryRepositoryLocalStorage = (): EntryRepository => {
    const findAll = async () => {
        const entries = localStorage.getItem(STORAGE_KEY);
        return entries ? JSON.parse(entries) : [];
    }

    const findAllByProjectId = async (projectId: string) => {
        const entries = await findAll();
        const entriesByProject = entries.filter((entry: Entry) => entry.projectId === projectId);
        return entriesByProject.map((entry: Entry) => ({
            id: entry.id,
            projectTitle: entry.title,
            title: entry.title,
            summary: entry.summary,
            createdAt: entry.createdAt
        }));
    }

    const findById = async (id: string) => {
        const entries = await findAll();
        return entries.find((entry: Entry) => entry.id === id) || null;
    }

    const findLasts = async () => {
        const entries = await findAll();
        return entries.map((entry: Entry) => ({
            id: entry.id,
            projectTitle: entry.title,
            title: entry.title,
            summary: entry.summary,
            createdAt: entry.createdAt
        }));
    }

    const create = async (entry: Entry) => {
        const entries = await findAll();
        entries.push(entry);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }

    return {
        findById,
        findLasts,
        findAllByProjectId,
        create
    }

}