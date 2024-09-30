# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "d1241619-391f-4e63-b470-a66cbf5ec594",
        isPrivate: false,
        name: "MyOrg",
        description: "yuck shinny invite",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "e04b621d-7eb6-458e-8b0b-eb2725ee459f",
          name: "<value>",
          avatarUrl: "https://trusty-junior.org/",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Lemke - Hansen",
          blog: "<value>",
          location: "<value>",
          email: "Isac73@gmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 289913,
      maxPage: 577710,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |