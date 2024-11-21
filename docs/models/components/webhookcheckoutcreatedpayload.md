# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2023-05-15T05:25:50.321Z"),
    modifiedAt: new Date("2022-08-31T08:50:06.151Z"),
    id: "<value>",
    status: "expired",
    clientSecret: "<value>",
    url: "https://scaly-sundae.info/",
    expiresAt: new Date("2024-06-13T13:52:47.549Z"),
    successUrl: "https://splendid-lifestyle.org/",
    embedOrigin: "<value>",
    amount: 224040,
    taxAmount: 376743,
    currency: "Qatari Rial",
    subtotalAmount: 848421,
    totalAmount: 478317,
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
    customerEmail: "Katelyn_Turner-Howe@hotmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Yemen",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": false,
    },
    product: {
      createdAt: new Date("2022-08-02T06:56:22.920Z"),
      modifiedAt: new Date("2022-05-05T23:37:22.458Z"),
      id: "<value>",
      name: "<value>",
      description: "when gloat unearth up brandish",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-06-04T19:35:25.688Z"),
          modifiedAt: new Date("2023-12-29T09:49:51.089Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-09-08T18:09:01.569Z"),
          modifiedAt: new Date("2022-01-31T04:12:47.832Z"),
          id: "<value>",
          type: "articles",
          description:
            "faint zowie eek aha officially majestically aside yawningly modulo",
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
          path: "/root",
          mimeType: "<value>",
          size: 184468,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-09-16T05:19:36.435Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-04-11T03:53:47.888Z"),
          sizeReadable: "<value>",
          publicUrl: "https://average-cop-out.biz",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2022-11-12T08:59:34.640Z"),
      modifiedAt: new Date("2022-03-23T01:23:19.166Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 235022,
      currency: "Yuan Renminbi",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-07-08T07:48:14.392Z"),
          modifiedAt: new Date("2024-11-30T14:18:48.145Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 172520,
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
| `data`                                                                                                       | [components.Checkout](../../models/components/checkout.md)                                                   | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |