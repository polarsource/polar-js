# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2023-10-19T22:57:45.544Z"),
      modifiedAt: new Date("2023-11-27T19:52:32.797Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://friendly-starboard.info",
      bio: "<value>",
      company: "Schowalter, Reilly and Schinner",
      blog: "<value>",
      location: "<value>",
      email: "Presley.Turner97@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 616403,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 495225,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 230476,
    maxPage: 535148,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |