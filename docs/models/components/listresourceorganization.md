# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-11-25T08:47:29.806Z"),
      modifiedAt: new Date("2024-04-29T02:57:40.478Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "<value>",
      bio: "<value>",
      company: "Morar, Bashirian and Ankunding",
      blog: "<value>",
      location: "<value>",
      email: "Ressie4@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 305047,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 557987,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 982445,
    maxPage: 400448,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.OrganizationOutput](../../models/components/organizationoutput.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |