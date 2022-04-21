import { replaceInFile } from "replace-in-file";

const files = [
  "openapi.ts",
  "dist/openapi.json",
  "dist/openapi.yaml",
  "dist/openapi.d.ts",
];

const replaces = [
  {
    from: /api\.ideal-postcodes\.co.\uk/gi,
    to: "api.addresszen.com",
  },
  {
    from: /ideal-postcodes\.co\.uk/gi,
    to: "addresszen.com",
  },
  {
    from: /Ideal\sPostcodes/gi,
    to: "AddressZen",
  },
];

const run = async () => {
  for (const r of replaces) {
    const result = await replaceInFile({ ...r, files });
    console.log(result);
  }
  console.log("Done");
  process.exit(0);
};

run();
