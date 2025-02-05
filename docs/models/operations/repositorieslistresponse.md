# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "2879f934-3c71-4d69-bf98-ee7aa4290dcb",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description:
          "what well for anti powerfully bludgeon extricate rich aboard positively",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "0bc653d7-c922-44d5-8eab-407a5fafc82a",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://magnificent-kick.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Lueilwitz - Klein",
          blog: "<value>",
          location: "<value>",
          email: "Josephine36@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-04-22T23:49:59.353Z"),
          modifiedAt: new Date("2025-08-20T01:08:40.919Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://bossy-humor.name",
          bio: "<value>",
          company: "Rippin LLC",
          blog: "<value>",
          location: "<value>",
          email: "Reggie.Williamson@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 940297,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 918904,
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
      totalCount: 223258,
      maxPage: 285971,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |