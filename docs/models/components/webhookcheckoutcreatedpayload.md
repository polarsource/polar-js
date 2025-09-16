# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload.js";

let value: WebhookCheckoutCreatedPayload = {
  type: "checkout.created",
  timestamp: new Date("2024-06-17T23:01:40.328Z"),
  data: {
    createdAt: new Date("2023-08-20T15:49:44.498Z"),
    modifiedAt: new Date("2024-03-18T23:27:57.994Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "failed",
    clientSecret: "<value>",
    url: "https://leading-vibraphone.org",
    expiresAt: new Date("2025-04-27T02:23:43.493Z"),
    successUrl: "https://interesting-video.name",
    embedOrigin: "<value>",
    amount: 449681,
    discountAmount: 564684,
    netAmount: 247095,
    taxAmount: 750787,
    totalAmount: 250844,
    currency: "Won",
    productId: "<value>",
    productPriceId: "<value>",
    discountId: "<value>",
    allowDiscountCodes: false,
    requireBillingAddress: true,
    isDiscountApplicable: true,
    isFreeProductPrice: false,
    isPaymentRequired: false,
    isPaymentSetupRequired: true,
    isPaymentFormRequired: false,
    customerId: "<value>",
    isBusinessCustomer: true,
    customerName: "<value>",
    customerEmail: "<value>",
    customerIpAddress: "<value>",
    customerBillingName: "<value>",
    customerBillingAddress: {
      country: "US",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    billingAddressFields: {
      country: "disabled",
      state: "optional",
      city: "required",
      postalCode: "required",
      line1: "disabled",
      line2: "disabled",
    },
    metadata: {},
    externalCustomerId: "<id>",
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2025-07-05T05:38:23.285Z"),
        modifiedAt: null,
        id: "<value>",
        name: "<value>",
        description: "onto weep singe etch even obnoxiously so among",
        recurringInterval: "day",
        isRecurring: true,
        isArchived: true,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-02-28T01:09:21.212Z"),
            modifiedAt: new Date("2023-02-15T16:10:30.309Z"),
            id: "<value>",
            amountType: "free",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
            legacy: true,
          },
        ],
        benefits: [],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/X11R6",
            mimeType: "<value>",
            size: 327832,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: null,
            version: "<value>",
            service: "product_media",
            isUploaded: true,
            createdAt: new Date("2023-11-10T03:13:37.813Z"),
            sizeReadable: "<value>",
            publicUrl: "https://warlike-tinderbox.com",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2025-01-02T11:48:03.532Z"),
      modifiedAt: new Date("2024-04-15T06:23:21.766Z"),
      id: "<value>",
      name: "<value>",
      description:
        "continually amidst gentle quadruple ha bah pace alive noisily gad",
      recurringInterval: "day",
      isRecurring: true,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-08-30T16:26:00.743Z"),
          modifiedAt: new Date("2023-10-09T02:00:40.564Z"),
          id: "<value>",
          amountType: "fixed",
          isArchived: true,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 922916,
          legacy: true,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-08-22T09:43:58.793Z"),
          modifiedAt: new Date("2023-02-16T00:22:02.887Z"),
          type: "custom",
          description: "inside any judgementally grown consequently naturally",
          selectable: false,
          deletable: true,
          organizationId: "<value>",
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/X11R6",
          mimeType: "<value>",
          size: 327832,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: null,
          version: "<value>",
          service: "product_media",
          isUploaded: true,
          createdAt: new Date("2023-11-10T03:13:37.813Z"),
          sizeReadable: "<value>",
          publicUrl: "https://warlike-tinderbox.com",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2024-10-20T02:20:53.683Z"),
      modifiedAt: new Date("2023-06-20T01:00:26.312Z"),
      id: "<value>",
      amountType: "fixed",
      isArchived: true,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "week",
      priceCurrency: "<value>",
      priceAmount: 347812,
      legacy: true,
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      amount: 855249,
      currency: "Bahraini Dinar",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [],
    customerMetadata: {},
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | checkout.created                                                                              |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `data`                                                                                        | [components.Checkout](../../models/components/checkout.md)                                    | :heavy_check_mark:                                                                            | Checkout session data retrieved using an access token.                                        |                                                                                               |