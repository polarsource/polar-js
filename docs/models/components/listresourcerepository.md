# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components/listresourcerepository.js";

let value: ListResourceRepository = {
  items: [
    {
      id: "1bcf7416-9725-4e78-b760-37975cbf0b04",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description:
        "following delightfully deduct quixotic what worth tomorrow talkative soon",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "f16c9e18-9dd7-490b-b0a8-f26d8d8ae0e2",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://granular-velocity.org",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Douglas - Herzog",
        blog: "<value>",
        location: "<value>",
        email: "Carol45@gmail.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      internalOrganization: {
        createdAt: new Date("2024-01-30T22:50:52.801Z"),
        modifiedAt: new Date("2025-08-01T05:11:26.404Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://narrow-interior.name",
        email: "Audreanne_Sawayn@gmail.com",
        website: "<value>",
        socials: [
          {
            platform: "x",
            url: "https://appropriate-horst.biz",
          },
        ],
        detailsSubmittedAt: new Date("2025-07-14T07:05:49.939Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "invoice",
        },
        bio: "<value>",
        company: "Howe and Sons",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 561625,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 474955,
        profileSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 596194,
    maxPage: 232141,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |