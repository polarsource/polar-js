# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-06-04T12:08:37.668Z"),
      modifiedAt: new Date("2024-03-04T13:10:43.781Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://prime-self-confidence.org",
      bio: "<value>",
      company: "Harber, Witting and Beer",
      blog: "<value>",
      location: "<value>",
      email: "Jerome55@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 140972,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 325352,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 631123,
    maxPage: 359301,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |