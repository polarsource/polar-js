# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2024-04-08T02:10:23.808Z"),
        modifiedAt: new Date("2025-01-20T07:32:44.012Z"),
        trialInterval: "month",
        trialIntervalCount: 175754,
        name: "<value>",
        description: "unlined why alongside beyond sandy softly",
        recurringInterval: "year",
        recurringIntervalCount: 324286,
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {},
        prices: [
          {
            createdAt: new Date("2024-01-20T19:38:49.234Z"),
            modifiedAt: new Date("2024-11-03T13:15:47.525Z"),
            id: "<value>",
            source: "catalog",
            amountType: "free",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "week",
            legacy: true,
          },
        ],
        benefits: [],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/var/yp",
            mimeType: "<value>",
            size: 678611,
            storageVersion: null,
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-01T23:53:55.808Z"),
            version: "<value>",
            service: "product_media",
            isUploaded: false,
            createdAt: new Date("2023-02-02T09:12:11.130Z"),
            sizeReadable: "<value>",
            publicUrl: "https://unhealthy-unibody.net",
          },
        ],
        attachedCustomFields: [],
      },
    ],
    pagination: {
      totalCount: 279990,
      maxPage: 718643,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |