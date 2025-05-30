import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ObjectSimpleProtobuf = _test_functional_assertReturn(TypeGuardError)(
  "ObjectSimpleProtobuf"
)(ObjectSimpleProtobuf)(
  (p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) => typia.functional.assertReturn(p),
)