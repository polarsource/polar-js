# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations/externalorganizationslist.js";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "fd6a9a48-1362-4228-a79f-9343c71d69f9",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://unlined-impact.net",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Gulgowski, Cruickshank and Marks",
        blog: "<value>",
        location: "<value>",
        email: "Rene_Quitzon@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 674818,
      maxPage: 974576,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |