/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    username
    email
    projects {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    username
    email
    projects {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    username
    email
    projects {
      nextToken
      __typename
    }
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createProject = /* GraphQL */ `mutation CreateProject(
  $input: CreateProjectInput!
  $condition: ModelProjectConditionInput
) {
  createProject(input: $input, condition: $condition) {
    id
    name
    description
    database
    prompt {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProjectMutationVariables,
  APITypes.CreateProjectMutation
>;
export const updateProject = /* GraphQL */ `mutation UpdateProject(
  $input: UpdateProjectInput!
  $condition: ModelProjectConditionInput
) {
  updateProject(input: $input, condition: $condition) {
    id
    name
    description
    database
    prompt {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProjectMutationVariables,
  APITypes.UpdateProjectMutation
>;
export const deleteProject = /* GraphQL */ `mutation DeleteProject(
  $input: DeleteProjectInput!
  $condition: ModelProjectConditionInput
) {
  deleteProject(input: $input, condition: $condition) {
    id
    name
    description
    database
    prompt {
      nextToken
      __typename
    }
    users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProjectMutationVariables,
  APITypes.DeleteProjectMutation
>;
export const createPrompt = /* GraphQL */ `mutation CreatePrompt(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    projectPromptId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePromptMutationVariables,
  APITypes.CreatePromptMutation
>;
export const updatePrompt = /* GraphQL */ `mutation UpdatePrompt(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    projectPromptId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePromptMutationVariables,
  APITypes.UpdatePromptMutation
>;
export const deletePrompt = /* GraphQL */ `mutation DeletePrompt(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    projectPromptId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePromptMutationVariables,
  APITypes.DeletePromptMutation
>;
export const createUserProjects = /* GraphQL */ `mutation CreateUserProjects(
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
      owner
      createdAt
      updatedAt
      __typename
    }
    project {
      id
      name
      description
      database
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProjectsMutationVariables,
  APITypes.CreateUserProjectsMutation
>;
export const updateUserProjects = /* GraphQL */ `mutation UpdateUserProjects(
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
      owner
      createdAt
      updatedAt
      __typename
    }
    project {
      id
      name
      description
      database
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProjectsMutationVariables,
  APITypes.UpdateUserProjectsMutation
>;
export const deleteUserProjects = /* GraphQL */ `mutation DeleteUserProjects(
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
      owner
      createdAt
      updatedAt
      __typename
    }
    project {
      id
      name
      description
      database
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProjectsMutationVariables,
  APITypes.DeleteUserProjectsMutation
>;
