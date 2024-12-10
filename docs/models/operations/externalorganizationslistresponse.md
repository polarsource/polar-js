# ExternalOrganizationsListResponse

## Example Usage

```typescript
import { ExternalOrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: ExternalOrganizationsListResponse = {
  result: {
    items: [
      {
        id: "51539b48-cab3-4a43-b457-35e230b870fd",
        name: "<value>",
        avatarUrl: "https://sour-chapel.org",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Predovic, Greenholt and Abbott",
        blog: "<value>",
        location: "<value>",
        email: "Lauriane.Cole-Borer@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    ],
    pagination: {
      totalCount: 662360,
      maxPage: 889439,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceExternalOrganization](../../models/components/listresourceexternalorganization.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |