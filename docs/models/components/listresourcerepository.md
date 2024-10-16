# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "81080060-6336-4156-bde4-49250618af33",
      isPrivate: false,
      name: "MyOrg",
      description:
        "metabolise failing after finally even pish reapply vivid honesty",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "01893770-29fa-41d6-b193-65a6138c0919",
        name: "<value>",
        avatarUrl: "https://major-sand.biz/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Ullrich - Powlowski",
        blog: "<value>",
        location: "<value>",
        email: "Rosalind_Kuhn@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 95168,
    maxPage: 135597,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.RepositoryOutput](../../models/components/repositoryoutput.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |