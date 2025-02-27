# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components/listresourcebenefitgrant.js";

let value: ListResourceBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-09-07T12:14:03.053Z"),
      modifiedAt: new Date("2025-06-28T22:00:04.593Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      customerId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      customer: {
        createdAt: new Date("2025-12-26T11:07:58.955Z"),
        modifiedAt: new Date("2023-06-19T01:02:39.961Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        externalId: "<id>",
        email: "Alfreda.Hodkiewicz@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Fiji",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://soft-nucleotidase.biz",
      },
      properties: {
        advertisementCampaignId: "<id>",
      },
    },
  ],
  pagination: {
    totalCount: 157859,
    maxPage: 878283,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |