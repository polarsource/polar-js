# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2022-09-25T11:24:04.477Z"),
    modifiedAt: new Date("2023-05-12T07:16:04.376Z"),
    id: "<value>",
    status: "failed",
    clientSecret: "<value>",
    url: "https://ultimate-mythology.info",
    expiresAt: new Date("2022-12-27T03:00:57.232Z"),
    successUrl: "https://livid-fort.org",
    embedOrigin: "<value>",
    amount: 811865,
    taxAmount: 588740,
    currency: "Ouguiya",
    totalAmount: 497351,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Marshall12@gmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Ecuador",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": 569764,
    },
    product: {
      createdAt: new Date("2022-07-13T20:23:35.445Z"),
      modifiedAt: new Date("2023-04-27T04:26:18.428Z"),
      id: "<value>",
      name: "<value>",
      description:
        "yippee honestly unsung drat silver apt indeed indeed beyond",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-05-02T21:04:54.220Z"),
          modifiedAt: new Date("2023-06-05T19:11:08.158Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 360131,
          maximumAmount: 34104,
          presetAmount: 349710,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-10-12T13:49:00.865Z"),
          modifiedAt: new Date("2024-03-04T12:10:07.981Z"),
          id: "<value>",
          description: "gadzooks sleepily ostrich at",
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
          path: "/sbin",
          mimeType: "<value>",
          size: 781342,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-01-29T06:29:52.901Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-07-06T20:26:06.152Z"),
          sizeReadable: "<value>",
          publicUrl: "https://bleak-skyline.info/",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-05-02T01:12:09.041Z"),
      modifiedAt: new Date("2023-02-12T19:18:02.060Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-04-05T23:39:43.166Z"),
          modifiedAt: new Date("2024-04-11T01:56:01.447Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 790346,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.WebhookCheckoutCreatedPayloadType](../../models/components/webhookcheckoutcreatedpayloadtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.PolarCheckoutSchemasCheckout](../../models/components/polarcheckoutschemascheckout.md)           | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |