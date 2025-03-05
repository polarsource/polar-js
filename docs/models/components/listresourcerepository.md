# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components/listresourcerepository.js";

let value: ListResourceRepository = {
  items: [
    {
      id: "d8a6622e-77a0-48e6-a67d-9bb0fb90e7e6",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description:
        "advanced corporation however experienced why commercial likewise naturally key whoa",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "c5b6be92-f836-4bee-92d9-67cda0c06784",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://firm-silk.com",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Walsh - Kovacek",
        blog: "<value>",
        location: "<value>",
        email: "Leonie.Bogisich@gmail.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      internalOrganization: {
        createdAt: new Date("2025-08-30T01:05:50.247Z"),
        modifiedAt: new Date("2024-06-23T18:52:48.630Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://circular-heartbeat.biz/",
        bio: "<value>",
        company: "Effertz, Hodkiewicz and Langworth",
        blog: "<value>",
        location: "<value>",
        email: "Mallie_Weimann@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 614775,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 623066,
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
    totalCount: 178017,
    maxPage: 519008,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |