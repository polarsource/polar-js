# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefitGrant = {
  items: [
    {
      createdAt: new Date("2025-09-30T14:09:22.071Z"),
      modifiedAt: new Date("2025-01-25T02:10:29.931Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      customerId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      customer: {
        createdAt: new Date("2025-01-22T04:47:20.654Z"),
        modifiedAt: new Date("2025-01-28T02:45:28.314Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Terrell19@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Nepal",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://ecstatic-plastic.info",
      },
      properties: {
        advertisementCampaignId: "<id>",
      },
    },
  ],
  pagination: {
    totalCount: 97759,
    maxPage: 952546,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |