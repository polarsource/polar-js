# UsersBenefitsListResponse

## Example Usage

```typescript
import { UsersBenefitsListResponse } from "@polar-sh/sdk/models/operations";

let value: UsersBenefitsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-21T04:36:25.552Z"),
        modifiedAt: new Date("2024-07-17T14:06:34.909Z"),
        id: "<value>",
        description: "Managed mobile moderator",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 384382,
            timeframe: "month",
          },
          activations: {
            limit: 297534,
            enableUserAdmin: false,
          },
          limitUsage: 891773,
        },
        grants: [
          {
            createdAt: new Date("2022-03-04T03:46:41.208Z"),
            modifiedAt: new Date("2024-11-22T04:11:07.245Z"),
            id: "<value>",
            isGranted: false,
            isRevoked: false,
            properties: {
              licenseKeyId: "<value>",
              displayKey: "<value>",
            },
            subscriptionId: "<value>",
            orderId: "<value>",
            userId: "<value>",
            benefitId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 272656,
      maxPage: 383441,
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `result`                                                                                 | [components.ListResourceUserBenefit](../../models/components/listresourceuserbenefit.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |