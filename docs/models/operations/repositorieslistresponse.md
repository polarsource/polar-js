# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "81fb5d1e-a169-49ba-bad0-f647fed34da3",
        platform: "github",
        isPrivate: false,
        name: "MyOrg",
        description:
          "gallivant suddenly inwardly edge arid only duh caring longingly tenant",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "56d72751-5fef-4913-923e-3610fc62f681",
          platform: "github",
          name: "<value>",
          avatarUrl: "https://cool-taxicab.biz/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Yost - Weimann",
          blog: "<value>",
          location: "<value>",
          email: "Ron_Block35@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
        internalOrganization: {
          createdAt: new Date("2025-01-24T19:26:08.928Z"),
          modifiedAt: new Date("2025-04-09T17:11:45.598Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://burly-fuel.com",
          bio: "<value>",
          company: "Rempel - Goldner",
          blog: "<value>",
          location: "<value>",
          email: "Will16@gmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 926540,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 863694,
          profileSettings: {},
          featureSettings: {},
        },
      },
    ],
    pagination: {
      totalCount: 252622,
      maxPage: 89184,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |