# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations/benefitsgrants.js";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-12-12T16:47:35.521Z"),
        modifiedAt: new Date("2023-12-07T08:29:54.913Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2025-03-23T12:44:05.239Z"),
          modifiedAt: new Date("2024-06-19T21:50:51.021Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Katlynn55@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Panama",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://proud-lox.net/",
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 987633,
      maxPage: 981642,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |