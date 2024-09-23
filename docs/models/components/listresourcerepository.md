# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "e1096ce4-679f-4b64-9f2b-ea635baedde4",
      isPrivate: false,
      name: "MyOrg",
      description: "Implemented leading edge moratorium",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "4064feda-58d1-4c0d-bc0a-822c9fff1f37",
        name: "<value>",
        avatarUrl: "<value>",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Mann - Denesik",
        blog: "<value>",
        location: "<value>",
        email: "Beulah.Abshire@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 85794,
    maxPage: 62688,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.RepositoryOutput](../../models/components/repositoryoutput.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |