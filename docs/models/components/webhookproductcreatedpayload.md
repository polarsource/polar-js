# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components/webhookproductcreatedpayload.js";

let value: WebhookProductCreatedPayload = {
  type: "product.created",
  timestamp: new Date("2024-05-18T12:16:27.570Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2026-09-03T21:58:48.594Z"),
    modifiedAt: new Date("2025-07-19T00:50:54.843Z"),
    trialInterval: "month",
    trialIntervalCount: 226310,
    name: "<value>",
    description: null,
    visibility: "draft",
    recurringInterval: "week",
    recurringIntervalCount: 674337,
    isRecurring: true,
    isArchived: true,
    organizationId: "<value>",
    metadata: {},
    prices: [
      {
        createdAt: new Date("2026-11-04T05:55:16.817Z"),
        modifiedAt: new Date("2026-06-28T08:09:03.428Z"),
        id: "<value>",
        source: "catalog",
        amountType: "custom",
        priceCurrency: "<value>",
        taxBehavior: "inclusive",
        isArchived: true,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "week",
        minimumAmount: 202942,
        maximumAmount: 857772,
        presetAmount: 364269,
        legacy: true,
      },
    ],
    benefits: [],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/usr/libexec",
        mimeType: "<value>",
        size: 238122,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2026-06-12T01:48:20.505Z"),
        version: "<value>",
        service: "product_media",
        isUploaded: true,
        createdAt: new Date("2026-06-20T18:25:36.529Z"),
        sizeReadable: "<value>",
        publicUrl: "https://sophisticated-affect.biz",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2026-07-16T19:04:19.230Z"),
          modifiedAt: new Date("2025-02-05T20:03:25.495Z"),
          id: "<value>",
          metadata: {
            "key": 6988.1,
          },
          type: "text",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 235618,
        required: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"product.created"*                                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           | product.created                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Product](../../models/components/product.md)                                      | :heavy_check_mark:                                                                            | A product.                                                                                    |                                                                                               |