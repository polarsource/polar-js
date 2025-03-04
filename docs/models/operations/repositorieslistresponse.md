# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "449c5b11-1484-4480-bd91-f43db7e70b45",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "ambitious less pecan or spear progress slowly",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "ea9b34d1-9e12-411c-9a36-9b5562097471",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://victorious-kiss.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Emard and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Americo_Kessler59@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-01-28T23:40:14.971Z"),
          modifiedAt: new Date("2025-08-22T15:41:23.211Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://frightened-cappelletti.name",
          bio: "<value>",
          company: "Mraz, Armstrong and Toy",
          blog: "<value>",
          location: "<value>",
          email: "Antonietta.Kozey55@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 238315,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 907673,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
        },
      },
    ],
    pagination: {
      totalCount: 332956,
      maxPage: 290320,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |