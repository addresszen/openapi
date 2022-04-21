import { replaceInFile } from "replace-in-file";

const files = [
  "openapi.ts",
  "dist/openapi.json",
  "dist/openapi.yaml"
];

const replaces = [
  {
    from: "api.ideal-postcodes.co.uk",
    to: "api.addresszen.com",
  },
  {
    from: "ideal-postcodes.co.uk",
    to: "addresszen.com",
  }, {
    from: "Ideal Postcodes",
    to: "AddressZen"
  }
]

const run = async () => {
  for (const r of replaces) {
    const result = await replaceInFile({ ...r, files });
    console.log(result);
  }
  console.log("Done");
  process.exit(0);
};

run();
