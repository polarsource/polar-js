# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2023-11-24T07:53:06.544Z"),
      modifiedAt: new Date("2023-01-08T04:54:12.583Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://any-council.com/",
      bio: "<value>",
      company: "Frami - Schmeler",
      blog: "<value>",
      location: "<value>",
      email: "Winfield_Stroman77@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 257324,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 664425,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 563154,
    maxPage: 505663,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |