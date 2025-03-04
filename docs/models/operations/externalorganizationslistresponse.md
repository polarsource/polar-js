# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations/externalorganizationslist.js";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "e79cd183-bf0a-4a6a-86f7-debab247625b",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://helpful-trolley.biz",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Stehr, Ebert and Treutel",
        blog: "<value>",
        location: "<value>",
        email: "Imani5@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 421655,
      maxPage: 833788,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |