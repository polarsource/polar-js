# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components/webhookproductcreatedpayload.js";

let value: WebhookProductCreatedPayload = {
  type: "product.created",
  timestamp: new Date("2023-05-19T12:16:27.570Z"),
  data: {
    id: "<value>",
    createdAt: new Date("2025-09-03T21:58:48.594Z"),
    modifiedAt: new Date("2024-07-19T00:50:54.843Z"),
    trialInterval: "month",
    trialIntervalCount: 226310,
    name: "<value>",
    description: null,
    recurringInterval: "week",
    recurringIntervalCount: 276287,
    isRecurring: false,
    isArchived: true,
    organizationId: "<value>",
    metadata: {},
    prices: [],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2023-05-31T22:25:46.704Z"),
        modifiedAt: new Date("2023-07-23T01:35:07.884Z"),
        type: "license_keys",
        description:
          "hmph depend pish behind chainstay spattering actually owlishly to",
        selectable: true,
        deletable: false,
        organizationId: "<value>",
        metadata: {},
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 93452,
            timeframe: "day",
          },
          activations: {
            limit: 777902,
            enableCustomerAdmin: true,
          },
          limitUsage: null,
        },
      },
    ],
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
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-03-25T19:23:20.887Z"),
          modifiedAt: null,
          id: "<value>",
          metadata: {},
          type: "text",
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 110523,
        required: true,
      },
    ],
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | product.created                                                                               |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Product](../../models/components/product.md)                                      | :heavy_check_mark:                                                                            | A product.                                                                                    |                                                                                               |