/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  owner?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  projects?: ModelUserProjectsConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserProjectsConnection = {
  __typename: "ModelUserProjectsConnection",
  items:  Array<UserProjects | null >,
  nextToken?: string | null,
};

export type UserProjects = {
  __typename: "UserProjects",
  id: string,
  userId: string,
  projectId: string,
  user: User,
  project: Project,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  description?: string | null,
  database?: string | null,
  prompt?: ModelPromptConnection | null,
  users?: ModelUserProjectsConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPromptConnection = {
  __typename: "ModelPromptConnection",
  items:  Array<Prompt | null >,
  nextToken?: string | null,
};

export type Prompt = {
  __typename: "Prompt",
  id: string,
  name: string,
  template?: string | null,
  project?: Project | null,
  createdAt: string,
  updatedAt: string,
  projectPromptId?: string | null,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  owner?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  database?: string | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  database?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  database?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type CreatePromptInput = {
  id?: string | null,
  name: string,
  template?: string | null,
  projectPromptId?: string | null,
};

export type ModelPromptConditionInput = {
  name?: ModelStringInput | null,
  template?: ModelStringInput | null,
  and?: Array< ModelPromptConditionInput | null > | null,
  or?: Array< ModelPromptConditionInput | null > | null,
  not?: ModelPromptConditionInput | null,
  projectPromptId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePromptInput = {
  id: string,
  name?: string | null,
  template?: string | null,
  projectPromptId?: string | null,
};

export type DeletePromptInput = {
  id: string,
};

export type CreateUserProjectsInput = {
  id?: string | null,
  userId: string,
  projectId: string,
};

export type ModelUserProjectsConditionInput = {
  userId?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  and?: Array< ModelUserProjectsConditionInput | null > | null,
  or?: Array< ModelUserProjectsConditionInput | null > | null,
  not?: ModelUserProjectsConditionInput | null,
};

export type UpdateUserProjectsInput = {
  id: string,
  userId?: string | null,
  projectId?: string | null,
};

export type DeleteUserProjectsInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  database?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelPromptFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  template?: ModelStringInput | null,
  and?: Array< ModelPromptFilterInput | null > | null,
  or?: Array< ModelPromptFilterInput | null > | null,
  not?: ModelPromptFilterInput | null,
  projectPromptId?: ModelIDInput | null,
};

export type ModelUserProjectsFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  projectId?: ModelIDInput | null,
  and?: Array< ModelUserProjectsFilterInput | null > | null,
  or?: Array< ModelUserProjectsFilterInput | null > | null,
  not?: ModelUserProjectsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  database?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
};

export type ModelSubscriptionPromptFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  template?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPromptFilterInput | null > | null,
  or?: Array< ModelSubscriptionPromptFilterInput | null > | null,
};

export type ModelSubscriptionUserProjectsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  projectId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserProjectsFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProjectsFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    projects?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    projects?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    projects?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    database?: string | null,
    prompt?:  {
      __typename: "ModelPromptConnection",
      items:  Array< {
        __typename: "Prompt",
        id: string,
        name: string,
        template?: string | null,
        createdAt: string,
        updatedAt: string,
        projectPromptId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    database?: string | null,
    prompt?:  {
      __typename: "ModelPromptConnection",
      items:  Array< {
        __typename: "Prompt",
        id: string,
        name: string,
        template?: string | null,
        createdAt: string,
        updatedAt: string,
        projectPromptId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    database?: string | null,
    prompt?:  {
      __typename: "ModelPromptConnection",
      items:  Array< {
        __typename: "Prompt",
        id: string,
        name: string,
        template?: string | null,
        createdAt: string,
        updatedAt: string,
        projectPromptId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePromptMutationVariables = {
  input: CreatePromptInput,
  condition?: ModelPromptConditionInput | null,
};

export type CreatePromptMutation = {
  createPrompt?:  {
    __typename: "Prompt",
    id: string,
    name: string,
    template?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectPromptId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePromptMutationVariables = {
  input: UpdatePromptInput,
  condition?: ModelPromptConditionInput | null,
};

export type UpdatePromptMutation = {
  updatePrompt?:  {
    __typename: "Prompt",
    id: string,
    name: string,
    template?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectPromptId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePromptMutationVariables = {
  input: DeletePromptInput,
  condition?: ModelPromptConditionInput | null,
};

export type DeletePromptMutation = {
  deletePrompt?:  {
    __typename: "Prompt",
    id: string,
    name: string,
    template?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectPromptId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateUserProjectsMutationVariables = {
  input: CreateUserProjectsInput,
  condition?: ModelUserProjectsConditionInput | null,
};

export type CreateUserProjectsMutation = {
  createUserProjects?:  {
    __typename: "UserProjects",
    id: string,
    userId: string,
    projectId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      projects?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserProjectsMutationVariables = {
  input: UpdateUserProjectsInput,
  condition?: ModelUserProjectsConditionInput | null,
};

export type UpdateUserProjectsMutation = {
  updateUserProjects?:  {
    __typename: "UserProjects",
    id: string,
    userId: string,
    projectId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      projects?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserProjectsMutationVariables = {
  input: DeleteUserProjectsInput,
  condition?: ModelUserProjectsConditionInput | null,
};

export type DeleteUserProjectsMutation = {
  deleteUserProjects?:  {
    __typename: "UserProjects",
    id: string,
    userId: string,
    projectId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      projects?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    projects?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      projects?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    database?: string | null,
    prompt?:  {
      __typename: "ModelPromptConnection",
      items:  Array< {
        __typename: "Prompt",
        id: string,
        name: string,
        template?: string | null,
        createdAt: string,
        updatedAt: string,
        projectPromptId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPromptQueryVariables = {
  id: string,
};

export type GetPromptQuery = {
  getPrompt?:  {
    __typename: "Prompt",
    id: string,
    name: string,
    template?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectPromptId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPromptsQueryVariables = {
  filter?: ModelPromptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPromptsQuery = {
  listPrompts?:  {
    __typename: "ModelPromptConnection",
    items:  Array< {
      __typename: "Prompt",
      id: string,
      name: string,
      template?: string | null,
      project?:  {
        __typename: "Project",
        id: string,
        name: string,
        description?: string | null,
        database?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      projectPromptId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserProjectsQueryVariables = {
  id: string,
};

export type GetUserProjectsQuery = {
  getUserProjects?:  {
    __typename: "UserProjects",
    id: string,
    userId: string,
    projectId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      projects?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserProjectsQueryVariables = {
  filter?: ModelUserProjectsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProjectsQuery = {
  listUserProjects?:  {
    __typename: "ModelUserProjectsConnection",
    items:  Array< {
      __typename: "UserProjects",
      id: string,
      userId: string,
      projectId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        description?: string | null,
        database?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserProjectsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserProjectsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserProjectsByUserIdQuery = {
  userProjectsByUserId?:  {
    __typename: "ModelUserProjectsConnection",
    items:  Array< {
      __typename: "UserProjects",
      id: string,
      userId: string,
      projectId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        description?: string | null,
        database?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserProjectsByProjectIdQueryVariables = {
  projectId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserProjectsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserProjectsByProjectIdQuery = {
  userProjectsByProjectId?:  {
    __typename: "ModelUserProjectsConnection",
    items:  Array< {
      __typename: "UserProjects",
      id: string,
      userId: string,
      projectId: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      project:  {
        __typename: "Project",
        id: string,
        name: string,
        description?: string | null,
        database?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    projects?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    projects?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    projects?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
  owner?: string | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    database?: string | null,
    prompt?:  {
      __typename: "ModelPromptConnection",
      items:  Array< {
        __typename: "Prompt",
        id: string,
        name: string,
        template?: string | null,
        createdAt: string,
        updatedAt: string,
        projectPromptId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    database?: string | null,
    prompt?:  {
      __typename: "ModelPromptConnection",
      items:  Array< {
        __typename: "Prompt",
        id: string,
        name: string,
        template?: string | null,
        createdAt: string,
        updatedAt: string,
        projectPromptId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    description?: string | null,
    database?: string | null,
    prompt?:  {
      __typename: "ModelPromptConnection",
      items:  Array< {
        __typename: "Prompt",
        id: string,
        name: string,
        template?: string | null,
        createdAt: string,
        updatedAt: string,
        projectPromptId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserProjectsConnection",
      items:  Array< {
        __typename: "UserProjects",
        id: string,
        userId: string,
        projectId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePromptSubscriptionVariables = {
  filter?: ModelSubscriptionPromptFilterInput | null,
  owner?: string | null,
};

export type OnCreatePromptSubscription = {
  onCreatePrompt?:  {
    __typename: "Prompt",
    id: string,
    name: string,
    template?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectPromptId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePromptSubscriptionVariables = {
  filter?: ModelSubscriptionPromptFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePromptSubscription = {
  onUpdatePrompt?:  {
    __typename: "Prompt",
    id: string,
    name: string,
    template?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectPromptId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePromptSubscriptionVariables = {
  filter?: ModelSubscriptionPromptFilterInput | null,
  owner?: string | null,
};

export type OnDeletePromptSubscription = {
  onDeletePrompt?:  {
    __typename: "Prompt",
    id: string,
    name: string,
    template?: string | null,
    project?:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    projectPromptId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateUserProjectsSubscriptionVariables = {
  filter?: ModelSubscriptionUserProjectsFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProjectsSubscription = {
  onCreateUserProjects?:  {
    __typename: "UserProjects",
    id: string,
    userId: string,
    projectId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      projects?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserProjectsSubscriptionVariables = {
  filter?: ModelSubscriptionUserProjectsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProjectsSubscription = {
  onUpdateUserProjects?:  {
    __typename: "UserProjects",
    id: string,
    userId: string,
    projectId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      projects?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserProjectsSubscriptionVariables = {
  filter?: ModelSubscriptionUserProjectsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProjectsSubscription = {
  onDeleteUserProjects?:  {
    __typename: "UserProjects",
    id: string,
    userId: string,
    projectId: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      projects?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    project:  {
      __typename: "Project",
      id: string,
      name: string,
      description?: string | null,
      database?: string | null,
      prompt?:  {
        __typename: "ModelPromptConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserProjectsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
