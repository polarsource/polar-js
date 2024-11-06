# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "b26a705a-67d4-49dc-a304-2048a639cbd4",
      isPrivate: false,
      name: "MyOrg",
      description: "punctually gladly after adventurously out definite",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "386f86f1-45dc-44d1-97a4-1475610e14ad",
        name: "<value>",
        avatarUrl: "https://linear-atrium.info",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Wintheiser - Ruecker",
        blog: "<value>",
        location: "<value>",
        email: "Darrin.Halvorson@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2024-03-23T13:46:19.980Z"),
        modifiedAt: new Date("2022-06-21T20:48:34.925Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://magnificent-mousse.net",
        bio: "<value>",
        company: "Fay, Homenick and Beer",
        blog: "<value>",
        location: "<value>",
        email: "Tracy_Witting@yahoo.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 640046,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 666273,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 638042,
    maxPage: 189614,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |