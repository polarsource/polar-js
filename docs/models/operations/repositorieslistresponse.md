# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "01b42fda-52de-4d41-a8cf-e00a290b6cb7",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "since nab meh",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "e0804e67-6b68-41b8-bfd5-5a78f19a39c4",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://lined-range.info/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Krajcik Group",
          blog: "<value>",
          location: "<value>",
          email: "Arnoldo.Kreiger@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2024-03-28T22:44:50.176Z"),
          modifiedAt: new Date("2023-05-27T18:03:05.713Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://digital-help.org/",
          bio: "<value>",
          company: "Kerluke - Bartell",
          blog: "<value>",
          location: "<value>",
          email: "Arjun_Witting3@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 107706,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 405510,
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
      totalCount: 167200,
      maxPage: 774538,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |