// Deprecated aliases for schema names removed in the v4 spec, when the
// per-dataset address shapes collapsed into the flat `Address` record and the
// per-status error schemas into `ErrorResponse`. Hand-authored - openapi.ts is
// generated and must not carry edits.
//
// No alias is kept for `UspsAddress`: the v4 spec reuses that name for the
// native USPS record under `Address.native`, a different shape from the flat
// address it used to name, and an alias would hide that. The removed UK
// schemas get no alias either - their endpoints are gone from this spec.
import type { components } from "./openapi.js";

type Schemas = components["schemas"];

export type Address = Schemas["Address"];

/** @deprecated Use `Address` (`components["schemas"]["Address"]`). */
export type UsaGlobalAddress = Address;
/** @deprecated Use `components["schemas"]["AddressSuggestion"]`. */
export type UkAddressSuggestion = Schemas["AddressSuggestion"];
/** @deprecated Use `components["schemas"]["ErrorResponse"]`. */
export type BadRequestResponse = Schemas["ErrorResponse"];
/** @deprecated Use `components["schemas"]["ErrorResponse"]`. */
export type UnauthorizedResponse = Schemas["ErrorResponse"];
/** @deprecated Use `components["schemas"]["ErrorResponse"]`. */
export type RateLimitedResponse = Schemas["ErrorResponse"];
