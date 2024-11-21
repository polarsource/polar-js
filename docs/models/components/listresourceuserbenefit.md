# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2024-06-03T10:02:48.006Z"),
      modifiedAt: new Date("2024-02-27T19:43:42.467Z"),
      id: "<value>",
      description:
        "before consequently broadside standard stint unto sternly briefly provided accredit",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      grants: [
        {
          createdAt: new Date("2024-12-28T18:18:25.337Z"),
          modifiedAt: new Date("2022-08-30T16:10:43.426Z"),
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
        createdAt: new Date("2022-12-09T13:39:01.927Z"),
        modifiedAt: new Date("2022-08-17T10:07:20.026Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://qualified-label.name",
        bio: "<value>",
        company: "Morar - Johnston",
        blog: "<value>",
        location: "<value>",
        email: "Madisyn50@gmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 447878,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 966222,
        profileSettings: {},
        featureSettings: {},
      },
      properties: {
        note: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 793029,
    maxPage: 826431,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |