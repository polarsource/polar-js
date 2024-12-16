# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "56f8cc61-1fd5-4dee-ae2c-0c9b8900c4cb",
        isPrivate: false,
        name: "MyOrg",
        description: "meh snack insist",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "bb1ba540-646b-427c-a3de-11a8ec81174f",
          name: "<value>",
          avatarUrl: "https://hard-to-find-birdbath.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Nitzsche - D'Amore",
          blog: "<value>",
          location: "<value>",
          email: "Bill18@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2022-09-16T17:06:57.838Z"),
          modifiedAt: new Date("2024-05-24T15:43:43.985Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://warped-scarification.info",
          bio: "<value>",
          company: "Murazik Inc",
          blog: "<value>",
          location: "<value>",
          email: "Ernest26@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 772432,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 115208,
          profileSettings: {},
          featureSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 555281,
      maxPage: 967374,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |