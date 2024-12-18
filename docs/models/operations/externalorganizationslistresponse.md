# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "56f8cc61-1fd5-4dee-ae2c-0c9b8900c4cb",
        name: "<value>",
        avatarUrl: "https://biodegradable-godparent.org/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Jones - Nitzsche",
        blog: "<value>",
        location: "<value>",
        email: "Albina58@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 832839,
      maxPage: 186756,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |