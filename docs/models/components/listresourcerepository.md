# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components/listresourcerepository.js";

let value: ListResourceRepository = {
  items: [
    {
      id: "1ced7d14-d06d-4717-8b5e-f214723eb9b0",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "those naturally if solemnly underneath french now corny",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "dcfc9ea4-29bd-44e9-8bce-46ed67b0538c",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://likable-saloon.info",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Wintheiser LLC",
        blog: "<value>",
        location: "<value>",
        email: "Darion_Williamson67@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2025-05-30T23:32:14.193Z"),
        modifiedAt: new Date("2023-07-19T02:44:00.494Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://trivial-accompanist.com/",
        bio: "<value>",
        company: "Friesen, Ryan and O'Kon",
        blog: "<value>",
        location: "<value>",
        email: "Percy54@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 259180,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 301099,
        profileSettings: {},
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "invoice",
        },
      },
    },
  ],
  pagination: {
    totalCount: 370023,
    maxPage: 576624,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |