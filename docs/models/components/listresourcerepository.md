# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "d6b7f123-332b-4333-96f5-4153c1244dc9",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "musty fowl deduce anenst obnoxiously",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "2c7b6ba8-d994-4e86-8824-48b428d674c1",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://rewarding-mantua.net",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Dicki, Schiller and Heaney",
        blog: "<value>",
        location: "<value>",
        email: "Melisa56@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2025-04-05T20:43:21.058Z"),
        modifiedAt: new Date("2024-06-24T21:11:46.816Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://somber-gloom.name/",
        bio: "<value>",
        company: "Crona, Altenwerth and Gerhold",
        blog: "<value>",
        location: "<value>",
        email: "Kenton.Lowe@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 820684,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 667999,
        profileSettings: {},
        featureSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 451949,
    maxPage: 277082,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |