# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "e1211ca3-69b5-4562-8097-47169e7373ee",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "near pish between whenever travel before after distinct",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "4dd5ffb3-371e-4657-8ee4-8608ccb3120c",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://bruised-lyre.info/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Wiegand - Hagenes",
          blog: "<value>",
          location: "<value>",
          email: "Vinnie_Pfeffer@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2023-09-14T10:51:44.160Z"),
          modifiedAt: new Date("2025-11-14T12:22:42.084Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://aching-ghost.com",
          email: "Dale65@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "youtube",
              url: "https://smug-leading.org",
            },
          ],
          detailsSubmittedAt: new Date("2023-05-15T11:47:05.174Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Christiansen, Murray and Nikolaus",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 387077,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 435652,
          profileSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 517018,
      maxPage: 476719,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |