# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "484480d9-1f43-4db7-9e70-b45e9c89cfb0",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "as if accurate weird pro bah overstay than aha",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "20974716-9e73-473e-8e0b-7d950e9418b9",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://jam-packed-bell.net",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Howe LLC",
          blog: "<value>",
          location: "<value>",
          email: "Davion29@gmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2025-04-26T09:35:14.757Z"),
          modifiedAt: new Date("2023-01-07T16:04:03.383Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://kaleidoscopic-boyfriend.name",
          email: "Titus_Cummings25@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "other",
              url: "https://silky-replacement.biz/",
            },
          ],
          detailsSubmittedAt: new Date("2025-08-25T00:50:34.161Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Abbott, Rath and Mosciski",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 378928,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 650063,
          profileSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 666396,
      maxPage: 612234,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |