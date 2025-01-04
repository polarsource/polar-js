# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2024-02-14T09:32:18.526Z"),
    modifiedAt: new Date("2025-02-14T23:31:39.572Z"),
    id: "<value>",
    name: "<value>",
    description: "ugh nautical barring",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2025-05-07T05:17:18.959Z"),
        modifiedAt: new Date("2023-10-09T09:21:08.294Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 538752,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-05-13T16:28:56.418Z"),
        modifiedAt: new Date("2024-06-27T14:07:37.604Z"),
        id: "<value>",
        description:
          "airbrush happily short-term galoshes unimpressively cook solemnly etch scorpion hence",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          archived: {
            "key": false,
          },
          files: [
            "<value>",
          ],
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/var/log",
        mimeType: "<value>",
        size: 258750,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-08-06T04:23:14.951Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-09-25T03:38:49.818Z"),
        sizeReadable: "<value>",
        publicUrl: "https://soft-hope.com",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-05-26T06:05:41.394Z"),
          modifiedAt: new Date("2025-07-22T03:49:19.507Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 938076,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | A product.                                               |