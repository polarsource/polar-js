# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2022-10-09T20:20:41.199Z"),
      modifiedAt: new Date("2023-06-15T05:07:57.729Z"),
      id: "<value>",
      description: "reluctantly allegation indeed near whoever",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      grants: [
        {
          createdAt: new Date("2023-03-11T05:34:07.493Z"),
          modifiedAt: new Date("2024-12-01T00:56:25.598Z"),
          id: "<value>",
          isGranted: false,
          isRevoked: false,
          subscriptionId: "<value>",
          orderId: "<value>",
          userId: "<value>",
          benefitId: "<value>",
          properties: {},
        },
      ],
      organization: {
        createdAt: new Date("2023-10-18T06:30:37.569Z"),
        modifiedAt: new Date("2022-08-20T12:38:00.388Z"),
        id: "<value>",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://profitable-piglet.name",
        bio: "<value>",
        company: "Durgan - Flatley",
        blog: "<value>",
        location: "<value>",
        email: "Jessyca_Schmidt@hotmail.com",
        twitterUsername: "<value>",
        pledgeMinimumAmount: 536263,
        pledgeBadgeShowAmount: false,
        defaultUpfrontSplitToContributors: 149578,
        profileSettings: {},
        featureSettings: {},
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 786446,
    maxPage: 912760,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |