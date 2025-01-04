# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2023-12-04T11:57:18.685Z"),
      modifiedAt: new Date("2023-02-20T16:46:58.778Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://emotional-pressure.biz/",
      bio: "<value>",
      company: "Smitham - Beier",
      blog: "<value>",
      location: "<value>",
      email: "Tobin.Macejkovic@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 278273,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 1469,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 482868,
    maxPage: 894109,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |