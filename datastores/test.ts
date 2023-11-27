import { DefineDatastore, Schema } from "deno-slack-sdk/mod.ts";
import { TestType } from "../functions/types.ts";

export default DefineDatastore({
  name: "test-data",
  primary_key: "id",
  attributes: {
    id: {
      type: Schema.types.string,
    },
    test_field: {
      type: TestType,
    },
}});
