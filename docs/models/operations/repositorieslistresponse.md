# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "dd5ffb33-71e6-457e-9e48-608ccb3120c3",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "with vice mount",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "3aac8dc8-d12f-42aa-8668-7a1399313864",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://sturdy-marathon.org/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Conn - Bartell",
          blog: "<value>",
          location: "<value>",
          email: "Laurel.Jast@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2023-12-12T19:18:18.470Z"),
          modifiedAt: new Date("2023-11-28T05:04:18.930Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://expensive-adviser.biz",
          email: "Sedrick_Dickinson49@hotmail.com",
          website: "<value>",
          socials: [
            {
              platform: "tiktok",
              url: "https://courageous-rim.org",
            },
          ],
          detailsSubmittedAt: new Date("2023-12-05T15:38:08.811Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Stanton Inc",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 763922,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 585371,
          profileSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 975761,
      maxPage: 557090,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |