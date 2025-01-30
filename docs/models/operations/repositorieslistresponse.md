# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "7befee56-d727-4515-9fef-91323e3610fc",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "crossly sprinkles when how",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "2fda52de-d418-4cfe-b00a-290b6cb781aa",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://deserted-petticoat.name/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Balistreri and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Fred49@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-08-10T01:37:49.523Z"),
          modifiedAt: new Date("2024-08-26T10:02:28.026Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://lone-testimonial.com",
          bio: "<value>",
          company: "Abernathy Inc",
          blog: "<value>",
          location: "<value>",
          email: "Hassie_Jacobson@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 63427,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 713296,
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
      totalCount: 973569,
      maxPage: 871127,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |