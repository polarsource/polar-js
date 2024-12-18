# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "6dbd27bb-1ba5-4406-a46b-27c3de11a8ec",
        isPrivate: false,
        name: "MyOrg",
        description: "by whoa sympathetically",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "cfc58a4c-520a-44dc-a18f-dd4b5d1aa4ae",
          name: "<value>",
          avatarUrl: "https://functional-footrest.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Wiegand, Labadie and Schamberger",
          blog: "<value>",
          location: "<value>",
          email: "Garnet_Romaguera30@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2024-02-10T20:20:37.854Z"),
          modifiedAt: new Date("2022-06-21T10:04:50.151Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://torn-mentor.biz",
          bio: "<value>",
          company: "Feil, Hagenes and Kiehn",
          blog: "<value>",
          location: "<value>",
          email: "Jacklyn88@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 936700,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 313963,
          profileSettings: {},
          featureSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 179707,
      maxPage: 54286,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |