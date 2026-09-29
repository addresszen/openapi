# Changelog

## 4.1.0 (2026-09-29)

### Minor Changes

- Declare `ApiKey` and `ManagementKey` Bearer security schemes on every operation; authentication docs lead with `Authorization: Bearer`
- Rename the user token to Management Key throughout
- Document licensee update as `POST /keys/{key}/licensees/{licensee}`, the method the API serves
- Verify Address documents the `context` parameter for addresses outside the United States
- Document recommended allowed URL formats
- US spelling and punctuation fixes in descriptions

### Patch Changes

- Licensee examples use postcode BR8 7RE

## 4.0.4 (2026-09-28)

### Patch Changes

- Point JavaScript exports at the built package entry.

## 4.0.3 (2026-09-28)

### Patch Changes

- Add repository, homepage and bug tracker links, so the npm page links to the public source at github.com/addresszen/openapi
- Correct the bundled `LICENSE` file to match the package licence

## 4.0.2 (2026-09-22)

### Patch Changes

- Bump @redocly/cli devDependency to fix a moderate path-traversal advisory in the split command (GHSA-657c-g7qc-r9j2); internal build tooling only, no spec or type changes.

## 4.0.1 (2026-09-17)

### Patch Changes

- Prerender the reference at openapi.addresszen.com, so the page shows its content on first paint instead of after the browser has fetched and rendered the whole spec

## 4.0.0 (2026-09-17)

### Major Changes

- The specification now describes the AddressZen API directly: address autocomplete (Find Address and Retrieve Address), Verify Address, place search, key, licensee and configuration management, and email and phone validation.
- Removed the UK-only operations and their response types: Lookup Postcode, Retrieve by UDPRN and UMPRN, Cleanse Address and Extract Addresses, the flat `WelshPafAddress`, `PafAliasAddress`, `GbrGlobalAddress` and `UkAddressSuggestion` schemas, the `PostcodeResponse`, `CleanseResponse`, `AddressResponse` and `GbrResolveAddressResponse` types, and the postcode, post town, UPRN and country filter and bias parameters.
- `PafAddress`, `MrAddress`, `NybAddress`, `PafaAddress`, `PafwAddress`, `AbAddress` and `AbpAddress` now name the raw UK dataset records rather than flat addresses, and `PafRecordBase` is their shared base.
- Added the flat `Address` schema returned by Retrieve Address, which carries the raw source record under `native`, and the documented autocomplete filters and biases `postal_code`, `postal_code_2`, `postal_code_3`, `city`, `state`, `state_code`, `is_pobox` and `is_business`.
- `native` is typed by the new `NativeRecord` schema, a `oneOf` over all 22 dataset records including the UK ones, so an address resolved from any dataset your key holds is described.
- Endpoint and dataset descriptions rewritten; numeric error codes leave the endpoint descriptions in favour of a link to the error codes guide.
- Deprecated type aliases keep the removed names compiling: `UsaGlobalAddress` (now `Address`), `UkAddressSuggestion` (now `AddressSuggestion`) and `BadRequestResponse`, `UnauthorizedResponse` and `RateLimitedResponse` (now `ErrorResponse`). They will be removed in a future major.
- Request samples in curl, JavaScript, Python, Ruby and PHP on every operation, with a plain URL sample on GET operations.

### Minor Changes

- Add the `swt` dataset (Switzerland CHE and Liechtenstein LIE) from the Swisstopo official directories of buildings, streets and localities: the `SwtAddress` schema, the `swt` member of the Dataset enum and API key dataset flags, and the `rm` (Romansh) language.

### Patch Changes

- Restyle the rendered reference at openapi.addresszen.com to match docs.addresszen.com: same type, colour, navigation and footer, in light and dark
- Follow the system light or dark preference on first visit
- Pin the reference renderer to a fixed version so the page no longer changes with upstream releases
- Point the USPS dataset tag schema link at the current record schema name, so the rendered reference at openapi.addresszen.com resolves it instead of erroring
- Fix the USPS Zip+4 data model tag pointing at a schema name that no longer exists, which stopped the rendered API reference from loading.
- Fix typos, grammar and American-English spelling throughout spec descriptions (metres, programme and recognised corrected to American spelling, subject-verb agreement fixes, stray characters and truncated words removed).

## 3.8.0 (2026-08-20)

### Minor Changes

- Document the source IP column on the key usage log CSV, and pick up the
  read-only `premier_support` flag on key details.

## 3.7.0 (2026-07-01)

### Minor Changes

- Add the France BAN (Base Adresse Nationale) dataset: new `BanAddress` schema, `ban` dataset enum value, and `ban` API key flag.

## 3.6.0 (2026-06-23)

### Minor Changes

- Add the AddressBase Premium (`abp`) dataset. A new `AbpAddress` type exposes the full property-level record (BLPU, DPA, classification, ground stability) from Ordnance Survey AddressBase Premium across the address lookup and resolve endpoints, alongside the `abp_address` schema tag and the `abp` API key dataset flag.

### Patch Changes

- Fix the `organisation_name` field description, which incorrectly duplicated the department-name text — it now describes the business or organisation receiving mail at the delivery point. Also corrects a typo in the `department_name` description.

## 3.5.2 (2026-06-18)

### Patch Changes

- Document the `AZ-Source-IP` request header for IP-forwarded lookups. Keys with IP forwarding enabled can supply an end user's IP via `AZ-Source-IP`, and the response echoes it back.

## 3.5.1

### Patch Changes

- The OpenAPI spec's `info.version` now matches the package version (previously hardcoded to 4.11.0). Build-time stamping ensures released specs are always truthful about their version. The rendered API reference and raw specs are published to `openapi.addresszen.com` on each release via Cloudflare Workers.

## 3.5.0 (2026-03-26)

### Minor Changes

- **openapi:** Add name, contexts, datasets, and notification settings to key details

### Patch Changes

- **build:** Add @types/node for pnpm strict resolution
- **build:** Escape regex backslash in replace.ts for TS 5.7
- **build:** Sync pnpm-lock.yaml with ~25.5.0 specifier
- **build:** Upgrade TypeScript to 5.7 and modernise tsconfig
- **build:** Use @types/node v24 to match Node.js target

## 3.4.1 (2025-09-15)

### Patch Changes

- **config:** Add API path to Redocly config and update CLI
- **Redocly:** Bump to V2
- **scripts:** Update start script to use new Redocly CLI command

## 3.4.0 (2025-07-22)

### Minor Changes

- **Coverage:** Global data improvements
- **spec:** Update OpenAPI specification to latest version

## 3.3.0 (2024-07-24)

### Minor Changes

- **Release:** Bump spec to latest

## 3.2.0 (2024-05-14)

### Minor Changes

- **Spec:** Update spec to 4.6.0

## 3.1.0 (2022-07-26)

### Minor Changes

- Internal dependency updates

## 3.0.0 (2022-06-09)

### Major Changes

- **deps:** Bumps API to v3

### Minor Changes

- Internal dependency updates

## 2.0.3 (2022-06-08)

### Patch Changes

- Internal dependency updates

## 2.0.2 (2022-04-21)

### Patch Changes

- **Endpoints:** Point to api.addresszen.com

## 2.0.1 (2022-04-21)

### Patch Changes

- **Initial:** Trigger initial release
