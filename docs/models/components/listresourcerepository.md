# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components/listresourcerepository.js";

let value: ListResourceRepository = {
  items: [
    {
      id: "6f751f78-10fa-43ec-9c7c-61f1f0f5713d",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "after although gosh wildly or awareness inasmuch",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "15b0c6e6-281e-4a4a-8ab9-3f19cb605a0d",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://triangular-pulse.org/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Wolff, Harris and Pollich",
        blog: "<value>",
        location: "<value>",
        email: "Emanuel_Altenwerth@gmail.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      internalOrganization: {
        createdAt: new Date("2025-04-07T04:19:46.458Z"),
        modifiedAt: new Date("2023-02-23T06:57:25.171Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://possible-community.name",
        email: "Jannie81@gmail.com",
        website: "<value>",
        socials: [
          {
            platform: "youtube",
            url: "https://overcooked-instruction.info",
          },
        ],
        detailsSubmittedAt: new Date("2025-02-15T01:25:37.907Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
        bio: "<value>",
        company: "Smitham and Sons",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 491648,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 586692,
        profileSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 557169,
    maxPage: 630092,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |