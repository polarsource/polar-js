# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2023-11-24T08:52:06.134Z"),
    modifiedAt: new Date("2022-05-21T01:42:30.363Z"),
    id: "<value>",
    name: "<value>",
    description:
      "including reluctantly loosely volleyball valiantly best though",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 554611,
    },
    prices: [
      {
        createdAt: new Date("2023-10-14T21:14:28.454Z"),
        modifiedAt: new Date("2024-01-13T15:19:31.438Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 219370,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-04-29T08:16:33.102Z"),
        modifiedAt: new Date("2022-11-09T21:59:58.532Z"),
        id: "<value>",
        description:
          "absent opposite ew tenant whenever inside annually even knavishly mountain",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          repositoryId: "<value>",
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
          permission: "maintain",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/net",
        mimeType: "<value>",
        size: 500629,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2022-04-21T18:22:25.645Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-07-17T08:39:28.965Z"),
        sizeReadable: "<value>",
        publicUrl: "https://unselfish-apricot.org",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2022-05-24T05:07:05.541Z"),
          modifiedAt: new Date("2024-03-01T04:04:19.932Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 811861,
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