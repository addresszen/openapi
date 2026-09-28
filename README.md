# AddressZen OpenAPI

OpenAPI v3 specification for `api.addresszen.com` and the TypeScript types generated from it.

## Links

- [API Reference](https://openapi.addresszen.com)
- [openapi.json](https://openapi.addresszen.com/openapi.json) / [openapi.yaml](https://openapi.addresszen.com/openapi.yaml)
- [npm: @addresszen/openapi](https://www.npmjs.com/package/@addresszen/openapi)
- [Documentation](https://docs.addresszen.com)

## Install

```bash
npm install @addresszen/openapi
```

Types are exported from the package root. The raw specs are at `node_modules/@addresszen/openapi/dist/openapi.json` and `dist/openapi.yaml`.

```ts
import type { paths, components } from "@addresszen/openapi";
```

## This repository

A read-only release mirror. Each tag matches the npm version and contains the spec (`openapi.json` and `openapi.yaml` at the repository root), the generated types, the deprecated type aliases and the changelog for that release. The spec is generated from the API source and updated here on each release, so pull requests against the spec files cannot be merged directly: open an issue or a PR and a maintainer will apply the change upstream and re-release.

For anything involving your account, keys or sensitive data, email support@addresszen.com rather than opening an issue.

## License

SEE LICENSE IN LICENSE
