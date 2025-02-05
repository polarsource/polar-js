# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations/benefitsgrants.js";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-02-24T13:40:14.894Z"),
        modifiedAt: new Date("2025-06-24T03:29:30.577Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2024-09-21T04:25:18.763Z"),
          modifiedAt: new Date("2025-06-08T18:22:37.952Z"),
          id: "<value>",
          metadata: {
            "key": 361690,
          },
          email: "Rafael74@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Saint Vincent and the Grenadines",
          },
          taxId: [
            "ua_vat",
          ],
          organizationId: "<value>",
          avatarUrl: "https://spotless-entry.org/",
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 734579,
      maxPage: 334548,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |