# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-24T16:19:54.015Z"),
        modifiedAt: new Date("2023-08-13T04:05:41.912Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2023-08-15T19:08:33.127Z"),
          modifiedAt: new Date("2024-05-17T14:12:14.525Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Joaquin_Jacobson@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Ecuador",
          },
          taxId: [
            "ca_bn",
          ],
          organizationId: "<value>",
          avatarUrl: "https://slow-cinder.com",
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 956054,
      maxPage: 251343,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |