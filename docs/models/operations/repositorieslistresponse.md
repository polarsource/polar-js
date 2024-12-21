# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "068caacc-71d9-40c6-a58a-e040db4caac2",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "abaft until versus lieu parallel juggernaut meanwhile",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "a8cf9190-514e-43c6-a5d6-f3e481052730",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://decisive-understanding.info/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Windler Group",
          blog: "<value>",
          location: "<value>",
          email: "Mercedes.Johns@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2024-01-06T11:43:34.285Z"),
          modifiedAt: new Date("2022-11-26T06:17:33.278Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://fussy-countess.name/",
          bio: "<value>",
          company: "Barton, Kuhic and Rolfson",
          blog: "<value>",
          location: "<value>",
          email: "Zackary.Crooks@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 640635,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 418736,
          profileSettings: {},
          featureSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 417340,
      maxPage: 877279,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |