# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2023-05-30T14:03:31.641Z"),
    modifiedAt: new Date("2024-05-09T11:46:57.173Z"),
    id: "<value>",
    name: "<value>",
    description: "blah since solemnly brr lamp physically afterwards",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 738443,
    },
    prices: [
      {
        createdAt: new Date("2024-10-01T21:33:32.957Z"),
        modifiedAt: new Date("2024-09-28T16:24:17.935Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-02-28T16:46:24.332Z"),
        modifiedAt: new Date("2024-06-11T09:05:14.093Z"),
        id: "<value>",
        description: "er upwardly drat downshift mmm unless",
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
        path: "/usr/libdata",
        mimeType: "<value>",
        size: 613686,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-04-15T10:27:07.964Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-02-05T08:07:52.101Z"),
        sizeReadable: "<value>",
        publicUrl: "https://busy-range.biz/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-12-10T13:54:14.729Z"),
          modifiedAt: new Date("2024-06-18T02:36:52.418Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 325595,
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