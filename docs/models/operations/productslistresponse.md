# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-09-19T17:41:08.939Z"),
        modifiedAt: new Date("2024-04-08T02:10:23.808Z"),
        id: "<value>",
        name: "<value>",
        description:
          "hearten unlined why alongside beyond sandy softly classic disrespect inside",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2024-06-28T06:21:21.363Z"),
            modifiedAt: new Date("2025-01-12T14:19:43.376Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 833109,
            maximumAmount: 232432,
            presetAmount: 822781,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-04-26T03:20:59.765Z"),
            modifiedAt: new Date("2023-01-20T00:33:54.779Z"),
            id: "<value>",
            description: "short-term gah intervention round fake",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              units: 189373,
              meterId: "<value>",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/opt/bin",
            mimeType: "<value>",
            size: 731142,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-11-10T06:54:43.810Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-12-11T14:43:29.865Z"),
            sizeReadable: "<value>",
            publicUrl: "https://plain-dream.info",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-03-21T13:25:37.079Z"),
              modifiedAt: new Date("2023-09-02T20:36:17.413Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 31672,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 730609,
      maxPage: 664714,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |