# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2023-08-21T04:36:26.084Z"),
    modifiedAt: new Date("2023-04-10T07:48:57.030Z"),
    id: "<value>",
    status: "succeeded",
    clientSecret: "<value>",
    url: "https://unique-veto.info/",
    expiresAt: new Date("2024-05-17T17:32:07.447Z"),
    successUrl: "https://oddball-translation.com",
    embedOrigin: "<value>",
    amount: 87129,
    taxAmount: 20218,
    currency: "Manat",
    subtotalAmount: 778157,
    totalAmount: 870013,
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
    customerEmail: "Pinkie.Sauer63@hotmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "United States of America",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": 414662,
    },
    product: {
      createdAt: new Date("2022-10-17T22:52:14.955Z"),
      modifiedAt: new Date("2024-04-28T13:26:34.681Z"),
      id: "<value>",
      name: "<value>",
      description: "over cuckoo canter even along rim",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-05-12T17:39:01.246Z"),
          modifiedAt: new Date("2022-11-21T13:40:18.320Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 118727,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-03-31T00:46:25.708Z"),
          modifiedAt: new Date("2022-03-12T07:20:08.678Z"),
          id: "<value>",
          type: "downloadables",
          description: "rally wherever minus runny rough agreeable beneath",
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
          path: "/selinux",
          mimeType: "<value>",
          size: 590873,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-09-22T11:03:04.845Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-12-17T21:47:39.716Z"),
          sizeReadable: "<value>",
          publicUrl: "https://intrepid-technician.info",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2024-06-02T14:07:36.077Z"),
      modifiedAt: new Date("2024-02-11T11:05:07.085Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 998848,
      type: "fixed",
      basisPoints: 868126,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-11-06T15:40:43.604Z"),
          modifiedAt: new Date("2022-05-16T16:57:38.984Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 807319,
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