# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2022-03-05T23:00:19.753Z"),
      modifiedAt: new Date("2024-10-01T17:35:14.588Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "<value>",
      bio: "<value>",
      company: "Bruen, Tillman and Murray",
      blog: "<value>",
      location: "<value>",
      email: "Brennon.Hoeger@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 324405,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 748789,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 680116,
    maxPage: 237807,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.OrganizationOutput](../../models/components/organizationoutput.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |