# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-29T19:59:29.074Z"),
        modifiedAt: new Date("2023-08-09T05:45:19.091Z"),
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
    pagination: {
      totalCount: 396610,
      maxPage: 106682,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |