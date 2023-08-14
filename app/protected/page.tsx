import { Amplify, withSSRContext } from "aws-amplify";
import { headers } from "next/headers";
import awsConfig from "../aws-exports";
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";
import { listProjects } from "../graphql/queries";

Amplify.configure({ ...awsConfig, ssr: true });
console.log("🕵️‍♀️", "amplify", "imported");

async function fetchData() {
  const req = {
    headers: {
      cookie: headers().get("cookie"),
    },
  };
  //console.log("🕵️‍♀️", "req", req);
  const SSR = withSSRContext({ req });
  //console.log("🕵️‍♀️", "SSR", SSR);
  let theData = {};
  try {
    const { data } = await SSR.API.graphql({ query: listProjects });
    theData = data;
  } catch (e) {
    console.log("hello", e);
  }
  return theData;
}

export default async function Page() {
  //await checkAuthAndRedirect('/login');
  console.log("protected page");

  const data = await fetchData();
  return (
    <div>
      PROTECTED PAGE
      <pre className="p-3 hellothere">{JSON.stringify(data, null, 2)}</pre>
      <ProjectForm />
      <ProjectList projects={data.listProjects.items} />
    </div>
  );
}
