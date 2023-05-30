/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createPrompt = /* GraphQL */ `
  mutation CreatePrompt(
    $input: CreatePromptInput!
    $condition: ModelPromptConditionInput
  ) {
    createPrompt(input: $input, condition: $condition) {
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
export const updatePrompt = /* GraphQL */ `
  mutation UpdatePrompt(
    $input: UpdatePromptInput!
    $condition: ModelPromptConditionInput
  ) {
    updatePrompt(input: $input, condition: $condition) {
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
export const deletePrompt = /* GraphQL */ `
  mutation DeletePrompt(
    $input: DeletePromptInput!
    $condition: ModelPromptConditionInput
  ) {
    deletePrompt(input: $input, condition: $condition) {
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
export const createUserProjects = /* GraphQL */ `
  mutation CreateUserProjects(
    $input: CreateUserProjectsInput!
    $condition: ModelUserProjectsConditionInput
  ) {
    createUserProjects(input: $input, condition: $condition) {
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
export const updateUserProjects = /* GraphQL */ `
  mutation UpdateUserProjects(
    $input: UpdateUserProjectsInput!
    $condition: ModelUserProjectsConditionInput
  ) {
    updateUserProjects(input: $input, condition: $condition) {
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
export const deleteUserProjects = /* GraphQL */ `
  mutation DeleteUserProjects(
    $input: DeleteUserProjectsInput!
    $condition: ModelUserProjectsConditionInput
  ) {
    deleteUserProjects(input: $input, condition: $condition) {
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
