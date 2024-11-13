# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2024-10-26T05:58:24.759Z"),
      modifiedAt: new Date("2022-05-22T13:19:47.503Z"),
      id: "<value>",
      description: "from throughout undergo",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      grants: [
        {
          createdAt: new Date("2023-05-29T04:05:53.462Z"),
          modifiedAt: new Date("2023-01-04T09:22:53.989Z"),
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
        createdAt: new Date("2022-05-09T00:29:29.459Z"),
        modifiedAt: new Date("2023-04-20T03:01:19.557Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://burdensome-executor.org",
        bio: "<value>",
        company: "DuBuque Group",
        blog: "<value>",
        location: "<value>",
        email: "Edmund.Zulauf@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 434345,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 926803,
        profileSettings: {},
        featureSettings: {},
      },
      properties: {
        guildId: "<id>",
      },
    },
  ],
  pagination: {
    totalCount: 134205,
    maxPage: 91136,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |