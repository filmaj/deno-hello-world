import { Manifest } from "deno-slack-sdk/mod.ts";
import GreetingWorkflow from "./workflows/greeting_workflow.ts";
import { ArrayOfNames, TestType } from "./functions/types.ts";
import Datastore from "./datastores/test.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "deno-hello-world",
  description:
    "A sample that demonstrates using a function, workflow and trigger to send a greeting",
  icon: "assets/default_new_app_icon.png",
  workflows: [GreetingWorkflow],
  outgoingDomains: [],
  types: [ArrayOfNames, TestType],
  datastores: [Datastore],
  botScopes: ["commands", "chat:write", "chat:write.public", "datastore:read", "datastore:write"],
});
