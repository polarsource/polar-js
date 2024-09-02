# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefitGrant = {
    items: [
        {
            createdAt: new Date("2024-10-24T15:33:24.787Z"),
            modifiedAt: new Date("2023-11-30T18:58:30.874Z"),
            id: "<value>",
            isGranted: false,
            isRevoked: false,
            properties: {},
            subscriptionId: "<value>",
            orderId: "<value>",
            userId: "<value>",
            benefitId: "<value>",
        },
    ],
    pagination: {
        totalCount: 672041,
        maxPage: 813054,
    },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |