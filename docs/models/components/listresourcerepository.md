# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "5e6b2879-ad36-409e-a6f9-38aaa333b7ac",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "slime our underneath bobble once store",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "632f183d-3b2f-4a6f-8862-b9333704b9db",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://jittery-fraudster.org",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Friesen LLC",
        blog: "<value>",
        location: "<value>",
        email: "Nathanial1@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2025-03-09T15:43:17.509Z"),
        modifiedAt: new Date("2024-06-15T14:07:15.875Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://imaginary-switchboard.com/",
        bio: "<value>",
        company: "Emmerich - Lebsack",
        blog: "<value>",
        location: "<value>",
        email: "Bell_King91@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 377716,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 918172,
        profileSettings: {},
        featureSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 579258,
    maxPage: 369722,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |