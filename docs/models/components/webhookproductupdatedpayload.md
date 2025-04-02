# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components/webhookproductupdatedpayload.js";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2025-07-26T21:15:37.202Z"),
    modifiedAt: new Date("2024-09-19T00:53:44.553Z"),
    id: "<value>",
    name: "<value>",
    description: "entire queasily reasoning embody until barring",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 853721,
    },
    prices: [
      {
        createdAt: new Date("2024-10-09T20:04:58.799Z"),
        modifiedAt: new Date("2025-02-21T06:13:59.813Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 503247,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-12-24T00:38:40.863Z"),
        modifiedAt: new Date("2024-09-30T11:00:56.426Z"),
        id: "<value>",
        description: "through testify prime grave who",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
          permission: "push",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/etc/defaults",
        mimeType: "<value>",
        size: 819052,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-11-24T03:17:57.386Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-01-15T13:48:09.028Z"),
        sizeReadable: "<value>",
        publicUrl: "https://outgoing-sermon.com",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-03-01T21:12:58.756Z"),
          modifiedAt: new Date("2023-02-08T06:32:17.533Z"),
          id: "<value>",
          metadata: {
            "key": 28033,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 496440,
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