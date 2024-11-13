# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2022-02-26T03:29:51.928Z"),
    modifiedAt: new Date("2023-07-07T02:04:12.238Z"),
    id: "<value>",
    name: "<value>",
    description: "perfectly extremely encode gadzooks browse atomize",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 193506,
    },
    prices: [
      {
        createdAt: new Date("2022-01-16T20:56:53.226Z"),
        modifiedAt: new Date("2023-03-31T19:03:13.780Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-09-12T19:18:28.211Z"),
        modifiedAt: new Date("2023-03-24T21:56:02.071Z"),
        id: "<value>",
        description: "consequently improbable quarterly testify",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {},
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/usr/local/src",
        mimeType: "<value>",
        size: 846160,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-03-20T09:47:46.111Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-10-08T23:40:51.269Z"),
        sizeReadable: "<value>",
        publicUrl: "https://honored-equal.biz",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2022-07-13T21:58:05.271Z"),
          modifiedAt: new Date("2024-07-01T22:06:35.493Z"),
          id: "<value>",
          metadata: {
            "key": 261144,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 584231,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookProductUpdatedPayloadType](../../models/components/webhookproductupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.Product](../../models/components/product.md)                                                   | :heavy_check_mark:                                                                                         | A product.                                                                                                 |