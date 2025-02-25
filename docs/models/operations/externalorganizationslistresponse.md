# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations/externalorganizationslist.js";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "f5715451-a1b3-4b7f-86df-09438f0fce04",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://deep-battle.name/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Tillman Group",
        blog: "<value>",
        location: "<value>",
        email: "Kristopher53@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 491684,
      maxPage: 95666,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |