# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations/externalorganizationslist.js";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "f0aa6a6f-7deb-4ab2-9476-25b0a5e4fd3e",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://irresponsible-coin.name/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Wisozk - Jones",
        blog: "<value>",
        location: "<value>",
        email: "Eloisa32@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
    ],
    pagination: {
      totalCount: 105783,
      maxPage: 73536,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |