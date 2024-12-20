# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "c3de11a8-ec81-4174-afa4-5135a2a1ea92",
        isPrivate: false,
        name: "MyOrg",
        description: "powerful how stoop that",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "4ae92454-af8c-4f50-9cb4-4b2dd93f3478",
          name: "<value>",
          avatarUrl: "https://tough-airline.org/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Wehner, Haley and Davis",
          blog: "<value>",
          location: "<value>",
          email: "Marta.Cummings27@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-10-28T17:30:10.640Z"),
          modifiedAt: new Date("2023-07-15T04:23:37.588Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://proper-stock.com",
          bio: "<value>",
          company: "Howe and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Leon6@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 881310,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 16985,
          profileSettings: {},
          featureSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 652443,
      maxPage: 562901,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |