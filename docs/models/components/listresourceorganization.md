# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2023-04-04T13:46:33.531Z"),
      modifiedAt: new Date("2023-09-25T17:25:50.604Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://lazy-confusion.info",
      bio: "<value>",
      company: "Renner and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Jermey_Cruickshank@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 193794,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 751286,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 521333,
    maxPage: 804638,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.OrganizationOutput](../../models/components/organizationoutput.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |