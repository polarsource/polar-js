# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "f134512d-72eb-44eb-9f19-424ba5119751",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "paltry what how ouch splosh",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "183bf0aa-6a6f-47de-bbab-247625b0a5e4",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://dutiful-technologist.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Kerluke Group",
          blog: "<value>",
          location: "<value>",
          email: "America.Jones-Skiles@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2025-04-26T05:04:16.490Z"),
          modifiedAt: new Date("2023-12-26T22:50:22.790Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://cautious-bench.com",
          email: "Jovany4@gmail.com",
          website: "<value>",
          socials: [
            {
              platform: "youtube",
              url: "https://woeful-electronics.biz/",
            },
          ],
          detailsSubmittedAt: new Date("2025-08-08T17:52:44.076Z"),
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "prorate",
          },
          bio: "<value>",
          company: "Thiel Inc",
          blog: "<value>",
          location: "<value>",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 26441,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 721823,
          profileSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 263671,
      maxPage: 323304,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |