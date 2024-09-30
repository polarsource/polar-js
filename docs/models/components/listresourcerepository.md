# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "39a19182-11e9-4418-a2c7-b6ba8d994e86",
      isPrivate: false,
      name: "MyOrg",
      description: "mid huzzah sweetly smoothly",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "9bc75c69-e204-4c9f-884c-ada7404063b3",
        name: "<value>",
        avatarUrl: "https://basic-requirement.org",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Macejkovic - Klein",
        blog: "<value>",
        location: "<value>",
        email: "Linda89@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 125297,
    maxPage: 860677,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.RepositoryOutput](../../models/components/repositoryoutput.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |