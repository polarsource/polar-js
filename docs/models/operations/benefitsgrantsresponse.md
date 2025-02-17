# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations/benefitsgrants.js";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-23T17:59:07.811Z"),
        modifiedAt: new Date("2025-05-10T23:33:33.951Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2024-09-01T08:37:51.173Z"),
          modifiedAt: new Date("2025-08-19T11:27:16.475Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Bailee55@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Wallis and Futuna",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://snoopy-spring.info",
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 376776,
      maxPage: 713325,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |