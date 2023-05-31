"use client";
import {
  Button,
  Flex,
  Heading,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useForm } from "react-hook-form";
import { createProject } from "../graphql/mutations";

export default function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit({ name, description, database }) {
    try {
      await API.graphql({
        query: createProject,
        variables: {
          input: {
            name,
            description,
            database,
          },
        },
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Heading marginBottom="medium" level={5}>
        Create Project
      </Heading>
      <Flex direction={"column"} basis={"fit-content"}>
        <View width="20rem">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register("name", { required: true })}
              errorMessage={errors?.name ? "There is an error" : ""}
            />

            <TextAreaField {...register("description")} />

            <TextField
              {...register("database", { required: true })}
              errorMessage={errors?.database ? "There is an error" : ""}
            />

            <Flex marginTop="large">
              <Button type="reset">Cancel</Button>
              <Button type="submit">Save</Button>
            </Flex>
          </form>
        </View>
      </Flex>
    </View>
  );
}
