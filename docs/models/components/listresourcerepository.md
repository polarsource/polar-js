# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "746e1038-01b7-4fe4-86e9-5cea3d6b7f12",
      isPrivate: false,
      name: "MyOrg",
      description: "hearten sans modulo unhealthy",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "a8123910-5bbc-4b97-839a-1918211e9418",
        name: "<value>",
        avatarUrl: "https://male-quit.info",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Paucek, MacGyver and Stamm",
        blog: "<value>",
        location: "<value>",
        email: "Kody_Waters@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 145242,
    maxPage: 265125,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.RepositoryOutput](../../models/components/repositoryoutput.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |