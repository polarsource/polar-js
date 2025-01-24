# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "18418037-5d45-4e29-961c-f69dc844d197",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "till lazy cemetery aha courteous scaly on during across",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "81fb5d1e-a169-49ba-bad0-f647fed34da3",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://prickly-wheel.name",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Gutmann, Wilderman and Hettinger",
          blog: "<value>",
          location: "<value>",
          email: "Carlee46@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2024-07-31T13:47:31.288Z"),
          modifiedAt: new Date("2024-04-04T01:58:10.321Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://circular-finger.biz/",
          bio: "<value>",
          company: "Blick Group",
          blog: "<value>",
          location: "<value>",
          email: "Yvonne55@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 669386,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 998684,
          profileSettings: {},
          featureSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 945277,
      maxPage: 843359,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |