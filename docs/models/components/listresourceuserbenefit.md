# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2022-05-30T09:02:00.896Z"),
      modifiedAt: new Date("2024-01-23T04:12:00.187Z"),
      id: "<value>",
      description: "ferociously where loyally beyond onto if carefully",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      grants: [
        {
          createdAt: new Date("2024-09-18T02:22:39.004Z"),
          modifiedAt: new Date("2023-05-08T12:12:24.685Z"),
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
        createdAt: new Date("2022-06-15T01:33:14.819Z"),
        modifiedAt: new Date("2023-10-13T20:06:24.868Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://disloyal-newsprint.info",
        bio: "<value>",
        company: "Langosh - Greenfelder",
        blog: "<value>",
        location: "<value>",
        email: "Shanel.Goyette27@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 771146,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 329016,
        profileSettings: {},
        featureSettings: {},
      },
      properties: {
        guildId: "<id>",
      },
    },
  ],
  pagination: {
    totalCount: 112513,
    maxPage: 540895,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |