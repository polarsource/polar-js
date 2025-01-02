# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
  data: {
    createdAt: new Date("2023-04-04T21:52:52.496Z"),
    modifiedAt: new Date("2025-06-06T08:49:54.446Z"),
    id: "<value>",
    name: "<value>",
    description:
      "for dulcimer disposer similar suddenly ugh ignite briefly quip after",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    metadata: {
      "key": "<value>",
    },
    prices: [
      {
        createdAt: new Date("2025-12-29T15:39:22.988Z"),
        modifiedAt: new Date("2025-01-30T14:39:50.524Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 477222,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-10-31T12:23:46.032Z"),
        modifiedAt: new Date("2025-11-27T23:07:28.367Z"),
        id: "<value>",
        description: "and minus confute pish",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          repositoryOwner: "polarsource",
          repositoryName: "private_repo",
          permission: "admin",
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/etc/mail",
        mimeType: "<value>",
        size: 80673,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-05-26T12:06:04.723Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-06-27T17:44:33.524Z"),
        sizeReadable: "<value>",
        publicUrl: "https://understated-tune-up.biz/",
      },
    ],
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-07-30T07:22:19.737Z"),
          modifiedAt: new Date("2024-10-25T12:11:28.317Z"),
          id: "<value>",
          metadata: {
            "key": 575838,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 301289,
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