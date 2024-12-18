# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2023-05-07T10:50:37.185Z"),
      modifiedAt: new Date("2024-07-27T08:56:13.386Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://plump-statue.net/",
      bio: "<value>",
      company: "Bechtelar - Gorczany",
      blog: "<value>",
      location: "<value>",
      email: "Alena_Lebsack37@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 569306,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 752367,
      profileSettings: {},
      featureSettings: {},
    },
  ],
  pagination: {
    totalCount: 694952,
    maxPage: 856985,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |