# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "0aa6a6f7-deba-4b24-9762-5b0a5e4fd3e4",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "exhaust bench apparatus unnaturally dowse snoopy",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "fb05c0ea-3601-4832-bfa0-42f498e052c6",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://weird-hutch.info",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Deckow, Nitzsche and Beier",
          blog: "<value>",
          location: "<value>",
          email: "Ona74@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2024-12-08T01:13:17.514Z"),
          modifiedAt: new Date("2024-09-13T14:02:48.796Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://elegant-ethyl.org",
          email: "Kyra.Bode10@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "linkedin",
              url: "https://elliptical-horst.name",
            },
          ],
          detailsSubmittedAt: new Date("2025-02-04T14:45:48.895Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Huel Group",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 41962,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 620174,
          profileSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 460078,
      maxPage: 282966,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |