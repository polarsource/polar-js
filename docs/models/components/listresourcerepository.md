# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "e0d89f24-379b-406e-97d1-4b97ace7a6e7",
      isPrivate: false,
      name: "MyOrg",
      description:
        "hollow receptor aboard hence who which incidentally fully behind midwife",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "5277c83d-2805-4a28-98e7-124c491391b7",
        name: "<value>",
        avatarUrl: "https://red-barracks.net",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Waelchi - Cremin",
        blog: "<value>",
        location: "<value>",
        email: "Deanna_Hane@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2023-10-30T06:49:47.105Z"),
        modifiedAt: new Date("2024-04-24T16:23:33.210Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://salty-stranger.biz",
        bio: "<value>",
        company: "Barrows LLC",
        blog: "<value>",
        location: "<value>",
        email: "Myah.Kling-Rogahn@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 450312,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 29722,
        profileSettings: {},
        featureSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 316842,
    maxPage: 676068,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |