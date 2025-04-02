# ListResourceRepository

## Example Usage

```typescript
import { ListResourceRepository } from "@polar-sh/sdk/models/components/listresourcerepository.js";

let value: ListResourceRepository = {
  items: [
    {
      id: "c95fd435-52ee-4d7c-85de-878316cad718",
      platform: "github",
      isPrivate: false,
      name: "MyOrg",
      description: "meander than past yahoo neatly yet",
      stars: 1337,
      license: "<value>",
      homepage: "<value>",
      profileSettings: {},
      organization: {
        id: "03c68da9-a119-45fd-ae29-0b0a3940a7b0",
        platform: "github",
        name: "<value>",
        avatarUrl: "https://corrupt-schedule.biz/",
        isPersonal: false,
        bio: "<value>",
        prettyName: "<value>",
        company: "Conroy - Connelly",
        blog: "<value>",
        location: "<value>",
        email: "Lambert_Gerhold@hotmail.com",
        twitterUsername: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      internalOrganization: {
        createdAt: new Date("2025-08-12T07:47:19.008Z"),
        modifiedAt: new Date("2023-08-27T23:28:28.119Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://bony-riser.biz",
        email: "Keeley.Fadel@gmail.com",
        website: "<value>",
        socials: [
          {
            platform: "facebook",
            url: "https://flimsy-pulse.biz",
          },
        ],
        detailsSubmittedAt: new Date("2025-04-28T15:21:24.503Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
        bio: "<value>",
        company: "Koelpin Group",
        blog: "<value>",
        location: "<value>",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 609427,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 874348,
        profileSettings: {},
      },
    },
  ],
  pagination: {
    totalCount: 31305,
    maxPage: 732670,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `items`                                                          | [components.Repository](../../models/components/repository.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `pagination`                                                     | [components.Pagination](../../models/components/pagination.md)   | :heavy_check_mark:                                               | N/A                                                              |