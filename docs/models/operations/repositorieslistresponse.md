# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "4780e793-c5a8-4d8d-955b-b14235f57154",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description: "wildly deselect assist",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "41621a8e-2591-4ef8-9d71-68b27ba15023",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://super-sarong.info",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Cole - Tillman",
          blog: "<value>",
          location: "<value>",
          email: "Libbie_Rodriguez@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2025-04-05T04:31:27.188Z"),
          modifiedAt: new Date("2024-02-01T00:57:00.592Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://submissive-pendant.info/",
          bio: "<value>",
          company: "Padberg, Collier and Heller",
          blog: "<value>",
          location: "<value>",
          email: "Pearl.McLaughlin@yahoo.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 880185,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 153538,
          profileSettings: {},
          featureSettings: {},
          subscriptionSettings: {
            allowMultipleSubscriptions: false,
            allowCustomerUpdates: false,
            prorationBehavior: "invoice",
          },
        },
      },
    ],
    pagination: {
      totalCount: 47284,
      maxPage: 465898,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |