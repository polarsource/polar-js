# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2023-12-30T06:59:24.222Z"),
      modifiedAt: new Date("2023-01-31T10:52:16.926Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://accurate-contractor.com/",
      bio: "<value>",
      company: "Hand - Block",
      blog: "<value>",
      location: "<value>",
      email: "Catharine_Hodkiewicz77@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 382479,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 977776,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 2309,
    maxPage: 458911,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |