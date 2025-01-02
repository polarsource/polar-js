# BenefitsGrantsResponse

## Example Usage

```typescript
import { BenefitsGrantsResponse } from "@polar-sh/sdk/models/operations";

let value: BenefitsGrantsResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-09-25T11:00:47.759Z"),
        modifiedAt: new Date("2024-07-26T07:43:54.459Z"),
        id: "<value>",
        isGranted: false,
        isRevoked: false,
        subscriptionId: "<value>",
        orderId: "<value>",
        customerId: "<value>",
        userId: "<value>",
        benefitId: "<value>",
        customer: {
          createdAt: new Date("2025-01-21T21:27:26.400Z"),
          modifiedAt: new Date("2024-07-11T13:24:15.441Z"),
          id: "<value>",
          metadata: {
            "key": 980995,
          },
          email: "Maxime45@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "United Arab Emirates",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://kosher-aftermath.info/",
        },
        properties: {
          advertisementCampaignId: "<id>",
        },
      },
    ],
    pagination: {
      totalCount: 883267,
      maxPage: 963239,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceBenefitGrant](../../models/components/listresourcebenefitgrant.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |