# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2024-02-05T02:33:57.609Z"),
    modifiedAt: new Date("2022-10-27T07:25:37.639Z"),
    id: "<value>",
    name: "<value>",
    description: "husky avalanche squid noxious connect amused",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-01-29T05:16:30.896Z"),
        modifiedAt: new Date("2022-10-19T23:23:19.077Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 799934,
        maximumAmount: 400993,
        presetAmount: 95162,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-02-25T14:45:53.645Z"),
        modifiedAt: new Date("2022-01-14T07:20:18.212Z"),
        id: "<value>",
        description:
          "instead under notwithstanding elastic furthermore moisten save",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          paidArticles: false,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/etc/namedb",
        mimeType: "<value>",
        size: 971493,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-10-20T08:31:50.564Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-02-02T21:36:44.416Z"),
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2022-01-02T05:13:35.742Z"),
          modifiedAt: new Date("2023-06-17T12:06:28.738Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 594804,
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
| `data`                                                                                                     | [components.ProductInput](../../models/components/productinput.md)                                         | :heavy_check_mark:                                                                                         | A product.                                                                                                 |