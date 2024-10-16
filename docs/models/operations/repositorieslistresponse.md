# RepositoriesListResponse

## Example Usage

```typescript
import { RepositoriesListResponse } from "@polar-sh/sdk/models/operations";

let value: RepositoriesListResponse = {
  result: {
    items: [
      {
        id: "1fe63470-a66c-4bf5-8ec5-94d1326b8706",
        isPrivate: false,
        name: "MyOrg",
        description: "before enrage upside-down accurate",
        stars: 1337,
        license: "<value>",
        homepage: "<value>",
        profileSettings: {},
        organization: {
          id: "beb2725e-e459-4f24-bd7e-2855765ebb49",
          name: "<value>",
          avatarUrl: "https://grown-rust.net",
          isPersonal: false,
          bio: "<value>",
          prettyName: "<value>",
          company: "Streich - Kiehn",
          blog: "<value>",
          location: "<value>",
          email: "Isidro.Mraz@yahoo.com",
          twitterUsername: "<value>",
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 401428,
      maxPage: 416692,
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `result`                                                                               | [components.ListResourceRepository](../../models/components/listresourcerepository.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |