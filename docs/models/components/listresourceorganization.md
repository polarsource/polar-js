# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2023-02-25T23:18:54.870Z"),
      modifiedAt: new Date("2023-07-13T11:31:10.565Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://pushy-lox.com",
      bio: "<value>",
      company: "Douglas - Mueller",
      blog: "<value>",
      location: "<value>",
      email: "Alessia79@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 613286,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 486162,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 208498,
    maxPage: 568548,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |