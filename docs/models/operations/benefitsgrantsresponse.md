# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations/benefitsgrants.js";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-04T01:43:26.070Z"),
        modifiedAt: new Date("2025-10-21T04:47:53.381Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2024-08-25T12:31:12.659Z"),
          modifiedAt: new Date("2023-09-13T01:01:31.367Z"),
          id: "<value>",
          metadata: {
            "key": 500943,
          },
          email: "Alexis.Robel@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Saint Lucia",
          },
          taxId: [
            "ru_inn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://close-antelope.info/",
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 737905,
      maxPage: 451768,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |