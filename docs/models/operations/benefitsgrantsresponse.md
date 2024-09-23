# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-05-08T10:10:03.097Z"),
        modifiedAt: new Date("2022-11-30T16:44:13.155Z"),
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
      totalCount: 839189,
      maxPage: 237742,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |