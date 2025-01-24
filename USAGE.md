<!-- Start SDK Example Usage [usage] -->
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.externalOrganizations.list({
    page: 1,
    limit: 10,
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->