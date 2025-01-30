# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components/listresourcerepository.js";

let value: ListResourceRepository = {
  items: [
    {
      id: "746e1038-01b7-4fe4-86e9-5cea3d6b7f12",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "hearten sans modulo unhealthy",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "a8123910-5bbc-4b97-839a-1918211e9418",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://male-quit.info",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Paucek, MacGyver and Stamm",
        blog: "<value>",
        location: "<value>",
        email: "Kody_Waters@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2023-06-09T04:26:57.182Z"),
        modifiedAt: new Date("2023-10-18T13:51:15.254Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://milky-porter.biz/",
        bio: "<value>",
        company: "Macejkovic - Steuber",
        blog: "<value>",
        location: "<value>",
        email: "Jarrett17@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 682216,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 548052,
        profileSettings: {},
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
      },
    },
  ],
  pagination: {
    totalCount: 996883,
    maxPage: 190874,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |