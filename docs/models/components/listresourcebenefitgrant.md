# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components/listresourcebenefitgrant.js";

let value: ListResourceBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-09-10T02:19:49.014Z"),
      modifiedAt: new Date("2024-02-02T03:58:47.126Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      customerId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      customer: {
        createdAt: new Date("2023-11-03T12:49:32.184Z"),
        modifiedAt: new Date("2024-06-08T00:28:28.491Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Ignatius52@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Germany",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://happy-community.info",
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 126514,
    maxPage: 122101,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |