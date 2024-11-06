# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-21T03:25:09.956Z"),
        modifiedAt: new Date("2023-07-21T10:46:34.659Z"),
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
      totalCount: 144058,
      maxPage: 899652,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |