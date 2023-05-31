export default function ProjectList({ projects = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Database</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{project.description}</td>
            <td>{project.database}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
