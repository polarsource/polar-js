# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "aa333b7a-c976-482c-9ecd-d2fa6e9fc5bb",
      isPrivate: false,
      name: "MyOrg",
      description:
        "bobble once store debit heartache astride omelet um anti grandpa",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "e103801b-7fe4-46e9-85ce-a3d6b7f12333",
        name: "<value>",
        avatarUrl: "https://elastic-depot.biz",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Williamson Inc",
        blog: "<value>",
        location: "<value>",
        email: "Annette_Feeney11@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 278510,
    maxPage: 288027,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.RepositoryOutput](../../models/components/repositoryoutput.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |