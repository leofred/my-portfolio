import { fetchProjects } from "@/infrastructure/github-api";
import { Project } from "@/domain/project";

export async function getProjects(): Promise<Project[]> {
  const data = await fetchProjects();
  return data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
  }));
}