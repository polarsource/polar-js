# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2023-08-19T15:30:07.630Z"),
    modifiedAt: new Date("2024-06-17T19:03:37.149Z"),
    id: "<value>",
    status: "expired",
    clientSecret: "<value>",
    url: "https://impossible-lobster.com",
    expiresAt: new Date("2022-02-08T09:47:50.312Z"),
    successUrl: "https://acceptable-rust.net/",
    embedOrigin: "<value>",
    amount: 416757,
    taxAmount: 608634,
    currency: "Belize Dollar",
    totalAmount: 844550,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Felix.Rath36@yahoo.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Chad",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": 369976,
    },
    product: {
      createdAt: new Date("2022-03-09T06:44:50.644Z"),
      modifiedAt: new Date("2022-12-06T22:09:36.543Z"),
      id: "<value>",
      name: "<value>",
      description: "psst wonderfully after meh",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-08-11T20:04:48.452Z"),
          modifiedAt: new Date("2022-10-23T05:03:16.724Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 694927,
          maximumAmount: 709929,
          presetAmount: 520841,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-12-26T05:35:55.283Z"),
          modifiedAt: new Date("2023-06-25T20:54:21.122Z"),
          id: "<value>",
          description: "yet quixotic bah why hmph whoever recent aha crossly",
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
          path: "/root",
          mimeType: "<value>",
          size: 603216,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-12-20T09:19:45.561Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-11-25T14:46:21.238Z"),
          sizeReadable: "<value>",
          publicUrl: "https://odd-synergy.info",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-08-06T04:55:45.780Z"),
      modifiedAt: new Date("2024-09-24T10:31:27.817Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 5736,
      maximumAmount: 855552,
      presetAmount: 608236,
      recurringInterval: "year",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-02-06T10:05:18.965Z"),
          modifiedAt: new Date("2023-11-27T17:45:25.271Z"),
          id: "<value>",
          metadata: {
            "key": 921566,
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
        order: 19684,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.WebhookCheckoutUpdatedPayloadType](../../models/components/webhookcheckoutupdatedpayloadtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.PolarCheckoutSchemasCheckout](../../models/components/polarcheckoutschemascheckout.md)           | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |