# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-08T02:10:23.808Z"),
        modifiedAt: new Date("2025-01-20T07:32:44.012Z"),
        id: "<value>",
        name: "<value>",
        description: "warmhearted wealthy which geez scruple innocent why",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2024-11-03T13:15:47.525Z"),
            modifiedAt: new Date("2025-12-24T03:50:27.310Z"),
            id: "<value>",
            amountType: "free",
            isArchived: true,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
            legacy: true,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-02-06T13:17:11.278Z"),
            modifiedAt: new Date("2025-04-26T10:13:16.029Z"),
            type: "github_repository",
            description: "tall pack rundown even",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            metadata: {},
            properties: {
              repositoryOwner: "polarsource",
              repositoryName: "private_repo",
              permission: "admin",
            },
          },
        ],
        medias: [],
        attachedCustomFields: [],
      },
    ],
    pagination: {
      totalCount: 47105,
      maxPage: 607201,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |