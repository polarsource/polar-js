# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations/benefitsgrants.js";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-05-23T19:42:16.496Z"),
        modifiedAt: new Date("2025-04-22T20:02:07.778Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2023-06-15T03:14:03.485Z"),
          modifiedAt: new Date("2023-06-12T22:42:54.501Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          externalId: "<id>",
          email: "Krystina29@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Guam",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://untrue-vestment.com",
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 960776,
      maxPage: 349371,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |