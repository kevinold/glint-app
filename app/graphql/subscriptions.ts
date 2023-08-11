/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateProject = /* GraphQL */ `subscription OnCreateProject(
  $filter: ModelSubscriptionProjectFilterInput
  $owner: String
) {
  onCreateProject(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProjectSubscriptionVariables,
  APITypes.OnCreateProjectSubscription
>;
export const onUpdateProject = /* GraphQL */ `subscription OnUpdateProject(
  $filter: ModelSubscriptionProjectFilterInput
  $owner: String
) {
  onUpdateProject(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProjectSubscriptionVariables,
  APITypes.OnUpdateProjectSubscription
>;
export const onDeleteProject = /* GraphQL */ `subscription OnDeleteProject(
  $filter: ModelSubscriptionProjectFilterInput
  $owner: String
) {
  onDeleteProject(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProjectSubscriptionVariables,
  APITypes.OnDeleteProjectSubscription
>;
export const onCreatePrompt = /* GraphQL */ `subscription OnCreatePrompt(
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
` as GeneratedSubscription<
  APITypes.OnCreatePromptSubscriptionVariables,
  APITypes.OnCreatePromptSubscription
>;
export const onUpdatePrompt = /* GraphQL */ `subscription OnUpdatePrompt(
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
` as GeneratedSubscription<
  APITypes.OnUpdatePromptSubscriptionVariables,
  APITypes.OnUpdatePromptSubscription
>;
export const onDeletePrompt = /* GraphQL */ `subscription OnDeletePrompt(
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
` as GeneratedSubscription<
  APITypes.OnDeletePromptSubscriptionVariables,
  APITypes.OnDeletePromptSubscription
>;
export const onCreateUserProjects = /* GraphQL */ `subscription OnCreateUserProjects(
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProjectsSubscriptionVariables,
  APITypes.OnCreateUserProjectsSubscription
>;
export const onUpdateUserProjects = /* GraphQL */ `subscription OnUpdateUserProjects(
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProjectsSubscriptionVariables,
  APITypes.OnUpdateUserProjectsSubscription
>;
export const onDeleteUserProjects = /* GraphQL */ `subscription OnDeleteUserProjects(
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProjectsSubscriptionVariables,
  APITypes.OnDeleteUserProjectsSubscription
>;
