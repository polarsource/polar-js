# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components/webhookproductupdatedpayload.js";

let value: WebhookProductUpdatedPayload = {
  type: "product.updated",
  timestamp: new Date("2024-07-10T16:47:33.947Z"),
  data: {
    createdAt: new Date("2025-09-03T21:58:48.594Z"),
    modifiedAt: new Date("2024-07-19T00:50:54.843Z"),
    id: "<value>",
    name: "<value>",
    description: "however yowza forenenst hmph hope tasty pertain except",
    recurringInterval: "day",
    isRecurring: false,
    isArchived: true,
    organizationId: "<value>",
    metadata: {},
    prices: [],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2023-06-24T08:08:21.885Z"),
        modifiedAt: null,
        type: "custom",
        description: "capitalise communicate oh",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        metadata: {
          "key": true,
        },
        properties: {
          note: "<value>",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/usr/X11R6",
        mimeType: "<value>",
        size: 327832,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: null,
        version: "<value>",
        service: "product_media",
        isUploaded: true,
        createdAt: new Date("2023-11-10T03:13:37.813Z"),
        sizeReadable: "<value>",
        publicUrl: "https://warlike-tinderbox.com",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-02-17T09:28:43.135Z"),
          modifiedAt: new Date("2024-12-12T07:00:59.178Z"),
          id: "<value>",
          metadata: {
            "key": 8232.57,
          },
          type: "text",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 723045,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | product.updated                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Product](../../models/components/product.md)                                      | :heavy_check_mark:                                                                            | A product.                                                                                    |                                                                                               |