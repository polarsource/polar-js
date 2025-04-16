# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components/webhookproductcreatedpayload.js";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2023-05-19T12:16:27.570Z"),
    modifiedAt: new Date("2025-09-03T21:58:48.594Z"),
    id: "<value>",
    name: "<value>",
    description: "athwart degenerate before gadzooks pluck",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 427510,
    },
    prices: [
      {
        createdAt: new Date("2025-09-02T05:35:28.168Z"),
        modifiedAt: new Date("2024-12-07T16:14:18.422Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 855106,
        maximumAmount: 836675,
        presetAmount: 352882,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2023-10-31T19:57:37.073Z"),
        modifiedAt: new Date("2023-02-03T22:58:09.301Z"),
        metadata: {
          "key": 3224.5,
        },
        description: "except so psst whoa where ack boo",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          note: "<value>",
        },
        isTaxApplicable: false,
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/usr/obj",
        mimeType: "<value>",
        size: 625620,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-06-25T07:41:35.792Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-02-09T07:13:52.875Z"),
        sizeReadable: "<value>",
        publicUrl: "https://roasted-loaf.name",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-01-28T13:08:13.837Z"),
          modifiedAt: new Date("2023-02-09T11:37:52.504Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 31618,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | product.created                                          |
| `data`                                                   | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | A product.                                               |                                                          |