# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "af8a78cf-086e-42d2-8ceb-f94dbd8d1e3c",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description:
          "lounge queasily likewise helplessly um convoke affiliate acidly bad curiously",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "38744c1e-6c2c-440c-a9a9-350e720c5487",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://hefty-wafer.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Bruen - Kutch",
          blog: "<value>",
          location: "<value>",
          email: "Gunnar.Prosacco@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2025-11-02T11:24:09.830Z"),
          modifiedAt: new Date("2024-05-31T09:34:59.782Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://superb-tomography.info/",
          email: "Rachael_Lowe47@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "linkedin",
              url: "https://second-hand-adrenalin.com",
            },
          ],
          detailsSubmittedAt: new Date("2024-09-25T04:26:26.242Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Turcotte - Von",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 792198,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 648504,
          profileSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 367326,
      maxPage: 92645,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |