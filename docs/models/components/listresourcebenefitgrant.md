# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefitGrant = {
    items: [
        {
            createdAt: new Date("2023-03-18T10:22:36.389Z"),
            modifiedAt: new Date("2023-03-12T09:26:29.954Z"),
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
        totalCount: 37565,
        maxPage: 999278,
    },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |