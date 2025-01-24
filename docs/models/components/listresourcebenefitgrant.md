# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components/listresourcebenefitgrant.js";

let value: ListResourceBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-12-01T16:19:30.816Z"),
      modifiedAt: new Date("2025-03-12T00:00:14.600Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      customerId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      customer: {
        createdAt: new Date("2025-03-09T09:53:49.933Z"),
        modifiedAt: new Date("2024-06-15T12:50:16.289Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Terry_Hauck@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Bhutan",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://lost-flat.info",
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 683057,
    maxPage: 600948,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |