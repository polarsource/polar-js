# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-17T04:37:18.826Z"),
        modifiedAt: new Date("2023-05-25T17:46:27.444Z"),
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
      totalCount: 120387,
      maxPage: 683271,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |