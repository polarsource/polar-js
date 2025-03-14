# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components/listresourcerepository.js";

let value: ListResourceRepository = {
  items: [
    {
      id: "f74517a9-0aa8-4f4d-8243-ec760bfc3466",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "that utilized too drat connect providence hmph gnash stuff",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "2d814ae1-9a4c-4130-8841-e3949ab40dfe",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://low-outset.name",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Padberg LLC",
        blog: "<value>",
        location: "<value>",
        email: "Bryon_Romaguera@yahoo.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      internalOrganization: {
        createdAt: new Date("2025-10-02T05:10:30.950Z"),
        modifiedAt: new Date("2024-12-18T01:43:34.636Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://defensive-newsstand.net/",
        email: "Eden80@hotmail.com",
        website: "<value>",
        socials: [
          {
            platform: "facebook",
            url: "https://unripe-soybean.info/",
          },
        ],
        detailsSubmittedAt: new Date("2024-05-27T04:51:56.681Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
        bio: "<value>",
        company: "Hilll - DuBuque",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 518795,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 772103,
        profileSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 129924,
    maxPage: 986735,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |