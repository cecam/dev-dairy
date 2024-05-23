import { Project } from "../domain/Project";
import { ProjectRepositoryLocalStorage } from "../infraestructure/Project.repository";

export const getAllProjects = async () => {
    const {findAll} = ProjectRepositoryLocalStorage();
    return findAll();
}

export const getProjectById = async (id: string) => {
    const {findById} = ProjectRepositoryLocalStorage();
    return findById(id);
}

export const createProject = async (project: Project) => {
    const {create} = ProjectRepositoryLocalStorage();
    return create(project);
}

export const updateProject = async (project: Project) => {
    const {update} = ProjectRepositoryLocalStorage();
    return update(project);
}

export const deleteProject = async (id: string) => {
    const {deleteProject} = ProjectRepositoryLocalStorage();
    return deleteProject(id);
}
