# WebhookProductUpdatedPayload

Sent when a product is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductUpdatedPayload = {
  data: {
    createdAt: new Date("2025-04-27T15:28:30.620Z"),
    modifiedAt: new Date("2023-12-30T04:23:53.970Z"),
    id: "<value>",
    name: "<value>",
    description: "arbitrate lend sometimes roughly",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": 835965,
    },
    prices: [
      {
        createdAt: new Date("2024-09-12T12:16:23.117Z"),
        modifiedAt: new Date("2023-05-12T09:56:36.366Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-05-07T19:51:00.898Z"),
        modifiedAt: new Date("2024-09-07T20:31:08.350Z"),
        id: "<value>",
        description: "unethically onto indeed yum exterior",
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
        path: "/usr/obj",
        mimeType: "<value>",
        size: 782079,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-09-22T12:52:03.409Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-06-08T22:29:24.231Z"),
        sizeReadable: "<value>",
        publicUrl: "https://unlined-dime.org",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-11-26T03:39:31.331Z"),
          modifiedAt: new Date("2024-11-07T00:51:46.255Z"),
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
        order: 99467,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | [components.Product](../../models/components/product.md) | :heavy_check_mark:                                       | A product.                                               |