# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "a78ef3a4-0c56-49da-9d4c-2fa3fb438036",
        isPrivate: false,
        name: "MyOrg",
        description: "Multi-lateral directional matrices",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "d182b692-275f-4cbe-b189-f4310eac4917",
          name: "<value>",
          avatarUrl: "<value>",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Hauck, Willms and Feeney",
          blog: "<value>",
          location: "<value>",
          email: "Troy29@hotmail.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 617877,
      maxPage: 13236,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |