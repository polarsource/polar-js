# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations/benefitsgrants.js";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-12T21:48:44.392Z"),
        modifiedAt: new Date("2024-02-24T10:34:06.485Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2025-09-25T00:15:26.523Z"),
          modifiedAt: new Date("2023-03-22T11:54:12.594Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          externalId: "<id>",
          email: "Taryn.Olson75@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Indonesia",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://upset-airline.org",
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 659497,
      maxPage: 655852,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |