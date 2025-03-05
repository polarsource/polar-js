# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-11-03T03:04:57.584Z"),
        modifiedAt: new Date("2025-02-17T00:36:16.610Z"),
        id: "<value>",
        name: "<value>",
        description: "less pecan or",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2025-05-06T19:40:45.220Z"),
            modifiedAt: new Date("2024-03-02T09:50:18.418Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            minimumAmount: 528173,
            maximumAmount: 950007,
            presetAmount: 442506,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-03-18T04:49:50.317Z"),
            modifiedAt: new Date("2023-07-20T22:17:57.471Z"),
            id: "<value>",
            description:
              "slowly triumphantly cheerfully hasty behind developmental meanwhile entwine",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              guildId: "<id>",
              roleId: "<id>",
              guildToken: "<value>",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/etc/defaults",
            mimeType: "<value>",
            size: 554974,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-02-07T13:42:59.030Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-11-11T17:17:08.680Z"),
            sizeReadable: "<value>",
            publicUrl: "https://unimportant-hubris.com/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-06-01T16:50:18.771Z"),
              modifiedAt: new Date("2024-02-27T09:44:46.188Z"),
              id: "<value>",
              metadata: {
                "key": 326766,
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
            order: 238315,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 907673,
      maxPage: 804572,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |