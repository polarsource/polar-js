# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations/externalorganizationslist.js";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "21545138-f664-48da-bffd-0c9bf3585d80",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://ripe-lamp.name",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Kiehn, Price and Stokes",
        blog: "<value>",
        location: "<value>",
        email: "Kristian_Zemlak18@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 453638,
      maxPage: 19151,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |