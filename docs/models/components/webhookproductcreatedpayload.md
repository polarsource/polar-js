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
        isArchived: true,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "day",
        minimumAmount: 383715,
        maximumAmount: 668933,
        presetAmount: 295250,
        legacy: true,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2025-03-30T08:15:20.584Z"),
        modifiedAt: new Date("2025-11-11T23:43:30.009Z"),
        type: "meter_credit",
        description: "hidden petticoat aside",
        selectable: false,
        deletable: true,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        properties: {
          units: 298008,
          rollover: false,
          meterId: "<value>",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/Applications",
        mimeType: "<value>",
        size: 764885,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-04-23T23:01:02.489Z"),
        version: "<value>",
        service: "product_media",
        isUploaded: true,
        createdAt: new Date("2025-12-09T18:31:15.290Z"),
        sizeReadable: "<value>",
        publicUrl: "https://winding-godfather.name/",
      },
    ],
    attachedCustomFields: [],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"product.created"*                                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           | product.created                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Product](../../models/components/product.md)                                      | :heavy_check_mark:                                                                            | A product.                                                                                    |                                                                                               |