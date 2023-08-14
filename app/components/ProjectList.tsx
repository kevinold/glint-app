"use client";
import { Amplify, API as _API } from "aws-amplify";
import * as queries from "../graphql/queries";

import { useEffect, useState } from "react";
import { Project } from "../API";
import awsConfig from "../aws-exports";

Amplify.configure({
  ...awsConfig,

  // for `generateClient()`:
  modelIntrospection: {
    models: {},
  },
});

const client = _API.generateClient();

export default function ProjectList() {
  const [projects, setProjects] = useState([] as Project[]);

  useEffect(() => {
    async function listAllProjects() {
      return await client.graphql({
        query: queries.listProjects,
        variables: {
          filter: {
            name: {
              contains: "Project",
            },
          },
        },
      });
    }
    listAllProjects().then((res) => {
      setProjects(res.data?.listProjects?.items as Project[]);
    });
  }, []);

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
