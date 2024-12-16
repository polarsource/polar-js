# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2022-06-02T00:35:18.950Z"),
      modifiedAt: new Date("2023-07-30T06:26:35.927Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://unused-insolence.com",
      bio: "<value>",
      company: "Gorczany - Schmeler",
      blog: "<value>",
      location: "<value>",
      email: "Leonardo9@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 449100,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 279575,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 873901,
    maxPage: 673158,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |