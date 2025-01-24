# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2024-02-07T14:47:05.729Z"),
    modifiedAt: new Date("2024-09-08T07:45:59.018Z"),
    id: "<value>",
    name: "<value>",
    description: "instead by knottily ugh per",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2024-02-13T17:25:18.235Z"),
        modifiedAt: new Date("2024-08-17T14:04:25.286Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 263577,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-08-30T15:41:35.683Z"),
        modifiedAt: new Date("2025-02-25T00:50:26.019Z"),
        id: "<value>",
        description: "breakable quicker maroon woot aboard",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
          permission: "triage",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/private/tmp",
        mimeType: "<value>",
        size: 909742,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-02-26T13:18:09.649Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-11-13T05:21:42.031Z"),
        sizeReadable: "<value>",
        publicUrl: "https://unwritten-recovery.org",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-05-18T17:28:39.250Z"),
          modifiedAt: new Date("2024-08-19T07:14:49.562Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 954989,
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