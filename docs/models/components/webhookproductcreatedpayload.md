# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2024-04-12T17:44:59.979Z"),
    modifiedAt: new Date("2024-01-31T13:31:33.214Z"),
    id: "<value>",
    name: "<value>",
    description:
      "fearless caring hmph woot embed stir-fry mmm infatuated until",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 35662,
    },
    prices: [
      {
        createdAt: new Date("2024-03-30T19:29:14.034Z"),
        modifiedAt: new Date("2022-07-08T06:05:15.080Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 845105,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-02-17T17:56:53.516Z"),
        modifiedAt: new Date("2022-07-08T18:50:43.868Z"),
        id: "<value>",
        description:
          "mostly substantiate bravely anesthetize unto agile crest put phooey",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          archived: {
            "key": false,
          },
          files: [
            "<value>",
          ],
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/private",
        mimeType: "<value>",
        size: 513819,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-06-21T03:59:41.372Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-06-05T14:44:57.569Z"),
        sizeReadable: "<value>",
        publicUrl: "https://smoggy-republican.biz/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-10-28T21:36:36.709Z"),
          modifiedAt: new Date("2024-07-08T13:41:05.027Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {
            options: [
              {
                value: "<value>",
                label: "<value>",
              },
            ],
          },
        },
        order: 133230,
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