# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations/benefitsgrants.js";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-02-20T19:17:02.763Z"),
        modifiedAt: new Date("2024-10-22T04:57:04.113Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2024-02-03T21:16:09.204Z"),
          modifiedAt: new Date("2023-09-07T18:14:29.053Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Grayce.Goyette@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Bosnia and Herzegovina",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://darling-complication.com/",
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 565691,
      maxPage: 992192,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |