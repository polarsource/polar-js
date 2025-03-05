# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "b5f06883-6bcb-40a3-9a69-3ae51f8dfd8f",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "detective when pertinent than",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "42e6f603-d5d6-44c1-8e65-39f53313ab6f",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://impressive-design.biz",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Wolff - Hudson",
          blog: "<value>",
          location: "<value>",
          email: "Holly64@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        internalOrganization: {
          createdAt: new Date("2025-07-21T01:34:36.432Z"),
          modifiedAt: new Date("2023-11-21T01:25:00.188Z"),
          id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://knowledgeable-monocle.name",
          bio: "<value>",
          company: "Hammes, Kemmer and Mayert",
          blog: "<value>",
          location: "<value>",
          email: "Donna10@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 822216,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 685593,
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
      totalCount: 711678,
      maxPage: 221188,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |