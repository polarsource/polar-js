# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-11-16T04:15:56.977Z"),
      modifiedAt: new Date("2022-01-03T21:02:39.550Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://slushy-cruelty.info/",
      bio: "<value>",
      company: "Gibson and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Nellie.Murphy26@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 572412,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 446719,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 193564,
    maxPage: 932641,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |