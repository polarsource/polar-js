# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components/webhookproductupdatedpayload.js";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2024-07-10T16:47:33.947Z"),
    modifiedAt: new Date("2023-10-05T00:02:08.987Z"),
    id: "<value>",
    name: "<value>",
    description: "indeed times whether meh for ugh nor snappy",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    prices: [
      {
        createdAt: new Date("2023-12-26T11:06:12.833Z"),
        modifiedAt: new Date("2024-02-19T23:14:40.767Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 313221,
        maximumAmount: 741035,
        presetAmount: 498756,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2023-01-22T08:43:31.668Z"),
        modifiedAt: new Date("2024-06-19T14:06:17.535Z"),
        description:
          "tentacle fair needily vaguely triangular ugh that accept who agreeable",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        metadata: {
          "key": false,
        },
        properties: {
          guildId: "<id>",
          roleId: "<id>",
          guildToken: "<value>",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/usr/local/src",
        mimeType: "<value>",
        size: 209578,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-11-12T08:17:41.246Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-06-13T13:46:21.644Z"),
        sizeReadable: "<value>",
        publicUrl: "https://negative-mouser.com/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-12-19T20:04:23.977Z"),
          modifiedAt: new Date("2024-04-11T11:01:02.896Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 665335,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | product.updated                                          |
| `data`                                                   | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | A product.                                               |                                                          |