# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "caacc71d-90c6-458a-ae04-0db4caac2985",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "doubter ick solemnly nicely commonly wherever",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "60e7a8cf-9190-4514-8e3c-65d6f3e48105",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://excitable-annual.net/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "D'Amore and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Kelton_Carroll-Deckow@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-05-03T22:07:33.571Z"),
          modifiedAt: new Date("2024-10-02T00:29:09.828Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://reckless-eternity.info/",
          bio: "<value>",
          company: "Douglas - Lang",
          blog: "<value>",
          location: "<value>",
          email: "Alexzander_Rolfson99@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 161742,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 319680,
          profileSettings: {},
          featureSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 6227,
      maxPage: 519466,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |