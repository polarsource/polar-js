# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "e790f725-823e-4d14-8a40-b354222fbf95",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "noisily thorn peter behind huzzah now",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "9c8bd450-8fbf-47b2-96a7-05a67d49dc30",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://amazing-exasperation.name/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Hodkiewicz Group",
        blog: "<value>",
        location: "<value>",
        email: "Nia.Stiedemann@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2023-12-19T10:54:29.736Z"),
        modifiedAt: new Date("2025-01-22T07:37:03.476Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://strange-analogy.info/",
        bio: "<value>",
        company: "Kassulke LLC",
        blog: "<value>",
        location: "<value>",
        email: "Sandra.Green1@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 851884,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 775815,
        profileSettings: {},
        featureSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 737994,
    maxPage: 689296,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |