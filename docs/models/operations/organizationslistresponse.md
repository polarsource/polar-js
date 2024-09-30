# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-05-03T23:32:08.929Z"),
        modifiedAt: new Date("2024-05-21T23:12:32.595Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://somber-receptor.com/",
        bio: "<value>",
        company: "Kiehn, Kuhlman and Kirlin",
        blog: "<value>",
        location: "<value>",
        email: "Lilliana_Streich@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 810839,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 348192,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
    ],
    pagination: {
      totalCount: 211455,
      maxPage: 59383,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |