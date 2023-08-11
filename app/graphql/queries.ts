/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      email
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getProject = /* GraphQL */ `query GetProject($id: ID!) {
  getProject(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProjectQueryVariables,
  APITypes.GetProjectQuery
>;
export const listProjects = /* GraphQL */ `query ListProjects(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProjectsQueryVariables,
  APITypes.ListProjectsQuery
>;
export const getPrompt = /* GraphQL */ `query GetPrompt($id: ID!) {
  getPrompt(id: $id) {
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
` as GeneratedQuery<APITypes.GetPromptQueryVariables, APITypes.GetPromptQuery>;
export const listPrompts = /* GraphQL */ `query ListPrompts(
  $filter: ModelPromptFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrompts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      template
      createdAt
      updatedAt
      projectPromptId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPromptsQueryVariables,
  APITypes.ListPromptsQuery
>;
export const getUserProjects = /* GraphQL */ `query GetUserProjects($id: ID!) {
  getUserProjects(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserProjectsQueryVariables,
  APITypes.GetUserProjectsQuery
>;
export const listUserProjects = /* GraphQL */ `query ListUserProjects(
  $filter: ModelUserProjectsFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      projectId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProjectsQueryVariables,
  APITypes.ListUserProjectsQuery
>;
export const userProjectsByUserId = /* GraphQL */ `query UserProjectsByUserId(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserProjectsByUserIdQueryVariables,
  APITypes.UserProjectsByUserIdQuery
>;
export const userProjectsByProjectId = /* GraphQL */ `query UserProjectsByProjectId(
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
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserProjectsByProjectIdQueryVariables,
  APITypes.UserProjectsByProjectIdQuery
>;
