import typia from "typia";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ClassPropertyAssignment = 
  _test_llm_parameters({
    model: "gemini",
    name: "ClassPropertyAssignment",
  })(
    typia.llm.parameters<ClassPropertyAssignmentParameters, "gemini">(),
  );

interface ClassPropertyAssignmentParameters {
  regular: ClassPropertyAssignment;
  nullable: ClassPropertyAssignment | null;
  optional: ClassPropertyAssignment | undefined;
  faint: ClassPropertyAssignment | null | undefined;
  array: Array<ClassPropertyAssignment>;
}