# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2023-02-01T23:01:15.623Z"),
    modifiedAt: new Date("2023-05-31T19:56:59.856Z"),
    id: "<value>",
    status: "expired",
    clientSecret: "<value>",
    url: "https://defenseless-festival.net",
    expiresAt: new Date("2022-03-11T06:36:47.494Z"),
    successUrl: "https://lively-ectoderm.biz",
    embedOrigin: "<value>",
    amount: 514513,
    taxAmount: 367927,
    currency: "North Korean Won",
    subtotalAmount: 337477,
    totalAmount: 970494,
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    allowDiscountCodes: false,
    isDiscountApplicable: false,
    isFreeProductPrice: false,
    isPaymentRequired: false,
    isPaymentSetupRequired: false,
    isPaymentFormRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Ava39@gmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Greenland",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": false,
    },
    product: {
      createdAt: new Date("2023-11-30T18:58:30.709Z"),
      modifiedAt: new Date("2024-06-10T02:34:07.748Z"),
      id: "<value>",
      name: "<value>",
      description:
        "athwart poorly consequently athwart um rationalize blank kiddingly overheard or",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-01-21T23:00:31.300Z"),
          modifiedAt: new Date("2023-07-22T21:24:45.727Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 842777,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-09-02T06:12:35.528Z"),
          modifiedAt: new Date("2022-03-30T06:18:49.749Z"),
          id: "<value>",
          type: "custom",
          description: "midst hm upright indeed",
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
          path: "/Library",
          mimeType: "<value>",
          size: 495970,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-01-18T04:29:15.055Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-10-31T23:09:30.587Z"),
          sizeReadable: "<value>",
          publicUrl: "https://clear-cut-coal.com",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2022-07-15T17:22:02.927Z"),
      modifiedAt: new Date("2023-11-03T16:50:49.466Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 81369,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 966390,
      type: "percentage",
      basisPoints: 300403,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-10-17T04:15:19.944Z"),
          modifiedAt: new Date("2023-07-25T18:06:31.843Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 877399,
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
| `data`                                                                                                       | [components.Checkout](../../models/components/checkout.md)                                                   | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |