# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2024-11-12T13:13:35.041Z"),
    modifiedAt: new Date("2023-07-15T16:45:43.480Z"),
    id: "<value>",
    status: "confirmed",
    clientSecret: "<value>",
    url: "https://peaceful-devil.name",
    expiresAt: new Date("2023-09-20T12:26:05.228Z"),
    successUrl: "https://impressive-cheetah.org",
    embedOrigin: "<value>",
    amount: 112328,
    taxAmount: 139468,
    currency: "Belarusian Ruble",
    subtotalAmount: 39410,
    totalAmount: 857732,
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
    customerEmail: "Boris86@hotmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Rwanda",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": "<value>",
    },
    product: {
      createdAt: new Date("2022-10-16T22:30:50.826Z"),
      modifiedAt: new Date("2022-07-30T18:22:13.120Z"),
      id: "<value>",
      name: "<value>",
      description:
        "team yum misspend status monthly since joyously whereas loftily",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-12-04T18:03:27.933Z"),
          modifiedAt: new Date("2023-09-02T20:46:43.071Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-08-08T14:14:17.299Z"),
          modifiedAt: new Date("2023-07-03T06:17:05.413Z"),
          id: "<value>",
          type: "license_keys",
          description:
            "swine unblinking solidly zowie windy anticodon instead instead yippee",
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
          path: "/private",
          mimeType: "<value>",
          size: 816908,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-09-02T02:21:11.091Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-08T02:22:44.446Z"),
          sizeReadable: "<value>",
          publicUrl: "https://dental-mallard.biz",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-09-26T03:15:51.295Z"),
      modifiedAt: new Date("2023-09-27T09:31:29.811Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "forever",
      type: "fixed",
      amount: 682642,
      currency: "Australian Dollar",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2022-11-19T11:06:17.765Z"),
          modifiedAt: new Date("2022-11-02T17:00:24.297Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 287750,
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