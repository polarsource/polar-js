# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "a9ac4537-6131-4825-8d98-f6e965e94833",
      isPrivate: false,
      name: "MyOrg",
      description: "exalt vanadyl bank shyly rapidly brr ew bah",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "04b708de-e873-4dcd-931b-ee8a148e790f",
        name: "<value>",
        avatarUrl: "https://grimy-lava.com/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Von - Swaniawski",
        blog: "<value>",
        location: "<value>",
        email: "Duncan.Gerlach70@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2022-12-23T03:37:50.202Z"),
        modifiedAt: new Date("2022-11-08T04:39:50.399Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://concrete-chasuble.org/",
        bio: "<value>",
        company: "Weimann, Marquardt and Harris",
        blog: "<value>",
        location: "<value>",
        email: "Jayne19@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 147916,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 528914,
        profileSettings: {},
        featureSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 42469,
    maxPage: 369181,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |