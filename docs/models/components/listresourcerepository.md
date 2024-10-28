# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "06336156-de44-4925-8061-8af33fd9d3dd",
      isPrivate: false,
      name: "MyOrg",
      description: "failing after finally even pish reapply vivid",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "d09ba460-1893-4770-829f-a1d619365a61",
        name: "<value>",
        avatarUrl: "https://square-ad.name",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Mitchell - Smith",
        blog: "<value>",
        location: "<value>",
        email: "Jeromy90@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 736574,
    maxPage: 843969,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |