# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations/repositorieslist.js";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "da7b00c2-c6f1-4841-9803-75d45e2961cf",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description:
          "bludgeon extricate rich aboard positively whether unexpectedly",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "5eab407a-5faf-4c82-ba26-773087181fb5",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://ultimate-perfection.com/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Metz LLC",
          blog: "<value>",
          location: "<value>",
          email: "Magali.Schuster@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2023-11-08T16:45:59.461Z"),
          modifiedAt: new Date("2024-06-20T14:53:55.894Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://urban-skeleton.biz",
          bio: "<value>",
          company: "Simonis - O'Hara",
          blog: "<value>",
          location: "<value>",
          email: "Santina55@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 303222,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 952068,
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
      totalCount: 99549,
      maxPage: 155134,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |