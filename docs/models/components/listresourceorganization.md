# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-03-20T02:18:43.143Z"),
      modifiedAt: new Date("2023-03-31T16:23:42.409Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "<value>",
      bio: "<value>",
      company: "Hessel - Wisozk",
      blog: "<value>",
      location: "<value>",
      email: "Francisco.Walsh@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 738683,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 232627,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 449083,
    maxPage: 348519,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.OrganizationOutput](../../models/components/organizationoutput.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |