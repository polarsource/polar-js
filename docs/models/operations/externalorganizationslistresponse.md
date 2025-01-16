# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "30c5c2a0-90bc-4653-ad7c-9224d5eab407",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://well-groomed-packaging.org/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Langosh, Cruickshank and O'Conner",
        blog: "<value>",
        location: "<value>",
        email: "Gust.Kunde@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 451749,
      maxPage: 63815,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |