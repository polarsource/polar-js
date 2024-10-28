# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2023-02-08T16:54:04.413Z"),
    modifiedAt: new Date("2023-03-12T19:58:30.016Z"),
    id: "<value>",
    status: "failed",
    clientSecret: "<value>",
    url: "https://upset-hippodrome.com",
    expiresAt: new Date("2023-05-17T22:14:01.048Z"),
    successUrl: "https://neighboring-paintwork.com/",
    embedOrigin: "<value>",
    amount: 617530,
    taxAmount: 132273,
    currency: "Kenyan Shilling",
    totalAmount: 892331,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Cordie.Beier@gmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Mayotte",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": "<value>",
    },
    product: {
      createdAt: new Date("2024-04-01T05:07:23.085Z"),
      modifiedAt: new Date("2024-10-08T20:53:19.157Z"),
      id: "<value>",
      name: "<value>",
      description: "break cinema without apostrophize adrenalin whoa",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-11-05T08:00:43.230Z"),
          modifiedAt: new Date("2023-10-08T00:15:06.736Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 433282,
          maximumAmount: 107645,
          presetAmount: 958248,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-11-11T12:57:03.441Z"),
          modifiedAt: new Date("2022-06-15T12:31:01.479Z"),
          id: "<value>",
          description:
            "seldom dandelion successfully essential encode accept annually where that",
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
          path: "/opt/lib",
          mimeType: "<value>",
          size: 749480,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-08-18T17:37:40.864Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-21T17:53:47.217Z"),
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-11-17T10:35:42.718Z"),
      modifiedAt: new Date("2023-11-28T05:20:13.228Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 511975,
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.WebhookCheckoutUpdatedPayloadType](../../models/components/webhookcheckoutupdatedpayloadtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.PolarCheckoutSchemasCheckoutInput](../../models/components/polarcheckoutschemascheckoutinput.md) | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |