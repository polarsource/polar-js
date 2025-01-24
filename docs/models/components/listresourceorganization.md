# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2025-10-10T06:09:21.767Z"),
      modifiedAt: new Date("2025-01-08T03:33:41.666Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://sudden-hepatitis.net/",
      bio: "<value>",
      company: "Weissnat Group",
      blog: "<value>",
      location: "<value>",
      email: "Clemmie.Feil69@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 235453,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 197388,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 398687,
    maxPage: 958594,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |