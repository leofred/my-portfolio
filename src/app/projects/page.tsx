import { getProjects } from "@/application/get-projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}
