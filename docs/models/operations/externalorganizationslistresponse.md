# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations/externalorganizationslist.js";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "55620974-7169-4e73-a73e-e0b7d950e941",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://poor-adviser.org",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Bins LLC",
        blog: "<value>",
        location: "<value>",
        email: "German90@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
    ],
    pagination: {
      totalCount: 332956,
      maxPage: 290320,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |