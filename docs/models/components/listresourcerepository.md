# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components";

let value: ListResourceRepository = {
  items: [
    {
      id: "5134d8f4-14fb-4e94-bf36-4a6ff1ecb5ac",
      isPrivate: false,
      name: "MyOrg",
      description:
        "woot afterwards amid tooth mid given coordinated genuine tensely",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "3b8df22a-0d66-4954-93bc-93b2e7739f9a",
        name: "<value>",
        avatarUrl: "https://dirty-lawmaker.com/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Konopelski LLC",
        blog: "<value>",
        location: "<value>",
        email: "Shawna92@gmail.com",
        twitterUsername: "<value>",
        organizationId: "<value>",
      },
      internalOrganization: {
        createdAt: new Date("2023-01-08T17:38:27.920Z"),
        modifiedAt: new Date("2022-11-30T00:18:02.410Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://brilliant-fuel.info",
        bio: "<value>",
        company: "Hane, Schiller and Sawayn",
        blog: "<value>",
        location: "<value>",
        email: "Clarissa.Kunze@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 991687,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 206874,
        profileSettings: {},
        featureSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 152719,
    maxPage: 364368,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |