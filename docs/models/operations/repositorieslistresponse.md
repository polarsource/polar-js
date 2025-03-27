# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "c0d7195e-c2c4-44f1-bbb3-e1b0b96aa934",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description:
          "mechanically taxicab save for experience incomparable whether monthly yearningly",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "2aa6687a-1399-4313-8864-00d8e3209936",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://prestigious-eyebrow.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Franecki Group",
          blog: "<value>",
          location: "<value>",
          email: "Scottie.VonRueden@gmail.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2023-10-16T10:23:17.202Z"),
          modifiedAt: new Date("2024-12-06T11:49:29.517Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://courageous-rim.org",
          email: "Baby.Stanton@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "other",
              url: "https://speedy-going.info",
            },
          ],
          detailsSubmittedAt: new Date("2023-10-24T05:26:05.632Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
          bio: "<value>",
          company: "Osinski Group",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 39140,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 27843,
          profileSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 533200,
      maxPage: 583224,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |