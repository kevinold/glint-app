/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onCreateProject(filter: $filter, owner: $owner) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onUpdateProject(filter: $filter, owner: $owner) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject(
    $filter: ModelSubscriptionProjectFilterInput
    $owner: String
  ) {
    onDeleteProject(filter: $filter, owner: $owner) {
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
export const onCreatePrompt = /* GraphQL */ `
  subscription OnCreatePrompt(
    $filter: ModelSubscriptionPromptFilterInput
    $owner: String
  ) {
    onCreatePrompt(filter: $filter, owner: $owner) {
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
export const onUpdatePrompt = /* GraphQL */ `
  subscription OnUpdatePrompt(
    $filter: ModelSubscriptionPromptFilterInput
    $owner: String
  ) {
    onUpdatePrompt(filter: $filter, owner: $owner) {
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
export const onDeletePrompt = /* GraphQL */ `
  subscription OnDeletePrompt(
    $filter: ModelSubscriptionPromptFilterInput
    $owner: String
  ) {
    onDeletePrompt(filter: $filter, owner: $owner) {
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
export const onCreateUserProjects = /* GraphQL */ `
  subscription OnCreateUserProjects(
    $filter: ModelSubscriptionUserProjectsFilterInput
    $owner: String
  ) {
    onCreateUserProjects(filter: $filter, owner: $owner) {
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
export const onUpdateUserProjects = /* GraphQL */ `
  subscription OnUpdateUserProjects(
    $filter: ModelSubscriptionUserProjectsFilterInput
    $owner: String
  ) {
    onUpdateUserProjects(filter: $filter, owner: $owner) {
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
export const onDeleteUserProjects = /* GraphQL */ `
  subscription OnDeleteUserProjects(
    $filter: ModelSubscriptionUserProjectsFilterInput
    $owner: String
  ) {
    onDeleteUserProjects(filter: $filter, owner: $owner) {
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
