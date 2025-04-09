# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "bd756cfb-798c-41c9-850f-d38c8f94a077",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "via terribly lasting pfft costume so preclude",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "32b87c0d-ebde-49c9-811a-2077caea6d8c",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://shadowy-cook.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Brown and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Fredrick.Ernser88@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2025-08-18T04:00:05.489Z"),
          modifiedAt: new Date("2023-10-19T09:24:48.837Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://good-pasta.net/",
          email: "Norwood.Harber0@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "facebook",
              url: "https://unhappy-tenement.info/",
            },
          ],
          detailsSubmittedAt: new Date("2025-03-12T19:05:17.385Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Davis Group",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 798396,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 232701,
          profileSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 29243,
      maxPage: 501848,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |