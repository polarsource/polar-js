# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2023-05-27T22:49:24.592Z"),
      modifiedAt: new Date("2024-04-05T08:01:37.302Z"),
      id: "<value>",
      description: "repeatedly supposing ferociously",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      grants: [
        {
          createdAt: new Date("2023-10-12T20:51:35.951Z"),
          modifiedAt: new Date("2023-11-03T05:14:01.508Z"),
          id: "<value>",
          isGranted: false,
          isRevoked: false,
          subscriptionId: "<value>",
          orderId: "<value>",
          userId: "<value>",
          benefitId: "<value>",
        },
      ],
      organization: {
        createdAt: new Date("2022-09-12T22:21:35.224Z"),
        modifiedAt: new Date("2023-06-21T04:35:15.122Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://kosher-settler.info/",
        bio: "<value>",
        company: "Cummerata, Lemke and Senger",
        blog: "<value>",
        location: "<value>",
        email: "Jamel7@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 468221,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 336123,
        donationsEnabled: false,
        profileSettings: {},
        featureSettings: {},
      },
      properties: {
        activeFiles: [
          "<value>",
        ],
      },
    },
  ],
  pagination: {
    totalCount: 116807,
    maxPage: 432597,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |