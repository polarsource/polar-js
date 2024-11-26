# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2022-03-23T01:23:19.166Z"),
    modifiedAt: new Date("2022-03-16T12:13:00.379Z"),
    id: "<value>",
    status: "open",
    clientSecret: "<value>",
    url: "https://dirty-depot.biz/",
    expiresAt: new Date("2022-11-24T09:56:09.198Z"),
    successUrl: "https://winding-scratch.biz",
    embedOrigin: "<value>",
    amount: 802851,
    taxAmount: 710093,
    currency: "Uzbekistan Sum",
    subtotalAmount: 434707,
    totalAmount: 867099,
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
    customerEmail: "Dora24@hotmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "United States of America",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": false,
    },
    product: {
      createdAt: new Date("2023-02-22T21:24:01.011Z"),
      modifiedAt: new Date("2023-08-17T02:43:11.535Z"),
      id: "<value>",
      name: "<value>",
      description:
        "debit drat wonderful knavishly forenenst although inculcate gee blah",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-10-29T23:19:43.392Z"),
          modifiedAt: new Date("2024-02-29T07:10:49.167Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 292425,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-12-05T12:38:16.171Z"),
          modifiedAt: new Date("2024-03-26T01:16:01.791Z"),
          id: "<value>",
          description: "furthermore moisten save miserably",
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
          path: "/srv",
          mimeType: "<value>",
          size: 993982,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-05-26T16:11:49.684Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-04-08T08:19:25.840Z"),
          sizeReadable: "<value>",
          publicUrl: "https://sizzling-fledgling.name/",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2022-04-22T08:22:38.865Z"),
      modifiedAt: new Date("2023-05-04T21:33:55.459Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
    },
    discount: {
      duration: "once",
      type: "percentage",
      amount: 174093,
      currency: "Pataca",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2022-06-21T16:09:43.950Z"),
          modifiedAt: new Date("2024-09-29T15:28:55.790Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
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
        order: 919235,
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