import { Project } from "../domain/Project";
import { ProjectRepository } from "../domain/ProjectRepository";

const STORAGE_KEY = 'projects';

export const ProjectRepositoryLocalStorage = (): ProjectRepository => {
    const findAll = async () => {
        const projects = localStorage.getItem(STORAGE_KEY);
        return projects ? JSON.parse(projects) : [];
    }

    const findById = async (id: string) => {
        const projects = await findAll();
        return projects.find((project: Project) => project.id === id) || null;
    }

    const create = async (project: Project) => {
        const projects = await findAll();
        projects.push(project);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }

    const update = async (project: Project) => {
        const projects = await findAll();
        const index = projects.findIndex((p: Project) => p.id === project.id);
        projects[index] = project;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }

    const deleteProject = async (id: string) => {
        const projects = await findAll();
        const index = projects.findIndex((project: Project) => project.id === id);
        projects.splice(index, 1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }

    return {
        findAll,
        findById,
        create,
        update,
        deleteProject
    }
}