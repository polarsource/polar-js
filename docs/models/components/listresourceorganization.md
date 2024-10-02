# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-09-06T22:38:24.153Z"),
      modifiedAt: new Date("2024-09-19T06:40:22.196Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://torn-amendment.com/",
      bio: "<value>",
      company: "Howell, Bernier and Kovacek",
      blog: "<value>",
      location: "<value>",
      email: "Agnes_Ebert33@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 984402,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 249941,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 61977,
    maxPage: 278836,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.OrganizationOutput](../../models/components/organizationoutput.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |