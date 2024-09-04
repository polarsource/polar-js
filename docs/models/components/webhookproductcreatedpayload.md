# WebhookProductCreatedPayload

Sent when a new product is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookProductCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookProductCreatedPayload = {
    data: {
        createdAt: new Date("2022-03-04T08:05:58.239Z"),
        modifiedAt: new Date("2023-06-30T02:28:26.949Z"),
        id: "<value>",
        name: "<value>",
        description: "Visionary asymmetric artificial intelligence",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "individual",
        isHighlighted: false,
        prices: [
            {
                createdAt: new Date("2024-03-10T11:24:11.514Z"),
                modifiedAt: new Date("2023-09-13T21:22:35.776Z"),
                id: "<value>",
                priceAmount: 578210,
                priceCurrency: "<value>",
                isArchived: false,
                recurringInterval: "month",
            },
        ],
        benefits: [
            {
                createdAt: new Date("2023-01-11T04:58:25.406Z"),
                modifiedAt: new Date("2024-12-19T16:03:13.461Z"),
                id: "<value>",
                type: "downloadables",
                description: "Organized dynamic throughput",
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
                path: "/Users",
                mimeType: "<value>",
                size: 559774,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2023-07-21T23:44:43.125Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2023-09-11T20:59:18.622Z"),
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