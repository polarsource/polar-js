# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components/webhookproductcreatedpayload.js";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2024-11-16T18:41:58.866Z"),
    modifiedAt: new Date("2024-07-08T05:45:55.648Z"),
    id: "<value>",
    name: "<value>",
    description: "daily likewise shanghai gah",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    prices: [
      {
        createdAt: new Date("2025-07-05T23:17:22.567Z"),
        modifiedAt: new Date("2023-02-15T19:47:09.789Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        unitAmount: 664858,
        capAmount: 271956,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-02-12T18:37:20.813Z"),
        modifiedAt: new Date("2023-04-14T03:03:06.965Z"),
        id: "<value>",
        description: "gee supposing fooey snow pace illustrious whoa",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
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
        path: "/mnt",
        mimeType: "<value>",
        size: 236965,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-07-23T11:23:06.312Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-09-23T15:38:22.213Z"),
        sizeReadable: "<value>",
        publicUrl: "https://pretty-complication.net/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-12-16T06:21:27.186Z"),
          modifiedAt: new Date("2024-12-16T15:38:36.793Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 15374,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      | product.created                                          |
| `data`                                                   | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | A product.                                               |                                                          |