export async function fetchProjects() {
  const res = await fetch("https://api.github.com/users/leofred/repos");
  return res.json();
}
