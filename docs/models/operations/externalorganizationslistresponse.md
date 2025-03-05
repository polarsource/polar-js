# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations/externalorganizationslist.js";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "d7137f3c-2a3c-48e1-a3c5-1b21862a6a6d",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://powerful-fraudster.info",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Barrows, D'Amore and Murphy",
        blog: "<value>",
        location: "<value>",
        email: "Royal42@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
    ],
    pagination: {
      totalCount: 296020,
      maxPage: 928743,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |