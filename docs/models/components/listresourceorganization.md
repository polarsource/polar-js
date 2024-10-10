# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2024-01-15T09:12:43.486Z"),
      modifiedAt: new Date("2024-07-14T14:53:59.208Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://mixed-cake.com",
      bio: "<value>",
      company: "Abernathy, Kuhic and Roob",
      blog: "<value>",
      location: "<value>",
      email: "Jaeden92@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 8636,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 628926,
      donationsEnabled: false,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 232112,
    maxPage: 267184,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |