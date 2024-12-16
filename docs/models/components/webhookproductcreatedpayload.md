# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2022-09-25T08:32:22.615Z"),
    modifiedAt: new Date("2022-12-30T10:27:46.222Z"),
    id: "<value>",
    name: "<value>",
    description: "doorpost qua recount serialize likewise",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2022-01-26T05:11:25.370Z"),
        modifiedAt: new Date("2022-05-27T17:47:02.462Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-11-08T14:06:44.172Z"),
        modifiedAt: new Date("2022-07-06T05:48:12.702Z"),
        id: "<value>",
        description:
          "since ah especially gladly although syringe but ew except",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 688899,
            timeframe: "year",
          },
          activations: {
            limit: 698630,
            enableCustomerAdmin: false,
          },
          limitUsage: 503697,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/bin",
        mimeType: "<value>",
        size: 774353,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-09-07T04:04:11.659Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-04-01T09:54:32.778Z"),
        sizeReadable: "<value>",
        publicUrl: "https://forceful-sweatshop.biz/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-08-22T13:28:33.020Z"),
          modifiedAt: new Date("2022-12-21T16:20:06.057Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 697401,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookProductCreatedPayloadType](../../models/components/webhookproductcreatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.Product](../../models/components/product.md)                                                   | :heavy_check_mark:                                                                                         | A product.                                                                                                 |