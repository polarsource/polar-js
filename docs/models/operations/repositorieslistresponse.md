# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "c1702c28-92e0-4e1e-95c6-bd86600b62da",
        isPrivate: false,
        name: "MyOrg",
        description: "brr finally radiant ack grumpy",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "6429eaad-b6c1-4d88-bea1-4b144b056178",
          name: "<value>",
          avatarUrl: "https://vibrant-dream.com",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Douglas LLC",
          blog: "<value>",
          location: "<value>",
          email: "Aniyah.Nienow@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2022-10-07T17:52:57.869Z"),
          modifiedAt: new Date("2022-07-08T09:04:33.014Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://unlucky-alligator.com/",
          bio: "<value>",
          company: "Parker Inc",
          blog: "<value>",
          location: "<value>",
          email: "Dorothea_Ratke@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 245539,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 534639,
          profileSettings: {},
          featureSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 726566,
      maxPage: 116592,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |