# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations/benefitsgrants.js";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-04-08T18:51:26.417Z"),
        modifiedAt: new Date("2023-10-14T15:58:41.867Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2024-05-02T10:37:08.569Z"),
          modifiedAt: new Date("2025-02-20T11:21:43.942Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Aubree_Rippin20@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Belize",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://nimble-premise.info/",
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 737968,
      maxPage: 201493,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |