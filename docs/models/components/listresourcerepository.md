# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "4d632f18-3d3b-42fa-b6f8-62b9333704b9",
      isPrivate: false,
      name: "MyOrg",
      description:
        "dislocate advertisement clueless hygienic hollow scarcely far vice",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "54153c12-44dc-4945-a9b6-8ea81239105b",
        name: "<value>",
        avatarUrl: "https://rubbery-obedience.info",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Mante - Nienow",
        blog: "<value>",
        location: "<value>",
        email: "Kennedi.Lockman11@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 911026,
    maxPage: 598087,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.RepositoryOutput](../../models/components/repositoryoutput.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |