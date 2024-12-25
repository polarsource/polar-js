# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-11T09:05:14.093Z"),
        modifiedAt: new Date("2023-05-27T23:48:56.996Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2022-06-15T00:22:00.811Z"),
          modifiedAt: new Date("2023-05-13T21:04:55.089Z"),
          id: "<value>",
          metadata: {
            "key": 85322,
          },
          email: "Vesta_Wisozk10@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Christmas Island",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://downright-giggle.com",
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 947851,
      maxPage: 762415,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |