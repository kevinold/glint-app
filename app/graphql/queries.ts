/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      projects {
        items {
          id
          userId
          projectId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        projects {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      database
      prompt {
        items {
          id
          name
          template
          createdAt
          updatedAt
          projectPromptId
          owner
        }
        nextToken
      }
      users {
        items {
          id
          userId
          projectId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        database
        prompt {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPrompt = /* GraphQL */ `
  query GetPrompt($id: ID!) {
    getPrompt(id: $id) {
      id
      name
      template
      project {
        id
        name
        description
        database
        prompt {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      projectPromptId
      owner
    }
  }
`;
export const listPrompts = /* GraphQL */ `
  query ListPrompts(
    $filter: ModelPromptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrompts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        template
        project {
          id
          name
          description
          database
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        projectPromptId
        owner
      }
      nextToken
    }
  }
`;
export const getUserProjects = /* GraphQL */ `
  query GetUserProjects($id: ID!) {
    getUserProjects(id: $id) {
      id
      userId
      projectId
      user {
        id
        username
        email
        projects {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      project {
        id
        name
        description
        database
        prompt {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUserProjects = /* GraphQL */ `
  query ListUserProjects(
    $filter: ModelUserProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        projectId
        user {
          id
          username
          email
          owner
          createdAt
          updatedAt
        }
        project {
          id
          name
          description
          database
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const userProjectsByUserId = /* GraphQL */ `
  query UserProjectsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProjectsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        projectId
        user {
          id
          username
          email
          owner
          createdAt
          updatedAt
        }
        project {
          id
          name
          description
          database
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const userProjectsByProjectId = /* GraphQL */ `
  query UserProjectsByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProjectsByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        projectId
        user {
          id
          username
          email
          owner
          createdAt
          updatedAt
        }
        project {
          id
          name
          description
          database
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
