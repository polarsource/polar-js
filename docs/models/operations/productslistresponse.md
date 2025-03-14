# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-10-27T06:52:47.808Z"),
        modifiedAt: new Date("2023-08-27T02:21:05.653Z"),
        id: "<value>",
        name: "<value>",
        description:
          "quick apud unfinished slimy uh-huh emboss vastly like sushi illiterate",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 314640,
        },
        prices: [
          {
            createdAt: new Date("2025-04-18T09:41:21.758Z"),
            modifiedAt: new Date("2024-12-31T11:52:56.158Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 773887,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-12-24T20:46:37.040Z"),
            modifiedAt: new Date("2024-02-14T18:49:30.286Z"),
            id: "<value>",
            description: "motionless bah optimistically where",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              repositoryOwner: "polarsource",
              repositoryName: "private_repo",
              permission: "push",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/Network",
            mimeType: "<value>",
            size: 351635,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-07-08T00:54:55.530Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-03-05T08:25:19.328Z"),
            sizeReadable: "<value>",
            publicUrl: "https://coordinated-slide.name",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-06-10T00:34:43.029Z"),
              modifiedAt: new Date("2023-06-08T13:49:52.565Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 517526,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 443031,
      maxPage: 261600,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |