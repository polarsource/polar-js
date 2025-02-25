# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "68b27ba1-5023-468d-bc74-2e79bbd76c50",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "seafood citizen tame second-hand daily ah bony whoa",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "310d9e1a-9d74-487a-9f59-58e5ecbc83f4",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://inconsequential-bob.info",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Volkman and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Mervin_Feeney@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2025-07-12T19:46:41.069Z"),
          modifiedAt: new Date("2024-02-05T02:13:20.778Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://alienated-rawhide.com/",
          bio: "<value>",
          company: "Zemlak, Johnston and Franey",
          blog: "<value>",
          location: "<value>",
          email: "Moriah_Emmerich@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 624289,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 270976,
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
      totalCount: 884367,
      maxPage: 658321,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |