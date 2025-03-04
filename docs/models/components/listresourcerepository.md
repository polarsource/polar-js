# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components/listresourcerepository.js";

let value: ListResourceRepository = {
  items: [
    {
      id: "c34663cc-b0e5-40ab-ba6d-58eb1ced7d14",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "yum deceivingly colligate",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "bbd986dd-760c-4a78-8ee2-d814ae19a4c1",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://meager-dividend.com/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Donnelly, Mante and Goldner",
        blog: "<value>",
        location: "<value>",
        email: "Madelyn85@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2025-08-29T07:15:18.011Z"),
        modifiedAt: new Date("2023-04-01T12:58:28.992Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://low-outset.name",
        bio: "<value>",
        company: "Padberg LLC",
        blog: "<value>",
        location: "<value>",
        email: "Bryon_Romaguera@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 917168,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 654263,
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
    totalCount: 175503,
    maxPage: 604308,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |