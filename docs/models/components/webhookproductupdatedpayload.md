# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2022-05-10T01:15:05.305Z"),
    modifiedAt: new Date("2023-10-12T13:11:40.528Z"),
    id: "<value>",
    name: "<value>",
    description: "mmm aha hmph",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-10-15T04:12:19.227Z"),
        modifiedAt: new Date("2024-06-09T09:26:08.069Z"),
        id: "<value>",
        isArchived: false,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-05-28T21:58:09.513Z"),
        modifiedAt: new Date("2024-07-19T04:58:26.102Z"),
        id: "<value>",
        type: "ads",
        description:
          "provided happy nucleotidase agreeable when seal cannon since",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/usr/local/bin",
        mimeType: "<value>",
        size: 199764,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-08-17T23:34:09.972Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-12-02T09:15:42.253Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [components.WebhookProductUpdatedPayloadType](../../models/components/webhookproductupdatedpayloadtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `data`                                                                                                     | [components.ProductInput](../../models/components/productinput.md)                                         | :heavy_check_mark:                                                                                         | A product.                                                                                                 |