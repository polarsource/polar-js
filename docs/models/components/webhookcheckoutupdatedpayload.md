# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2024-05-29T22:11:04.418Z"),
    modifiedAt: new Date("2024-02-18T06:17:13.411Z"),
    id: "<value>",
    status: "failed",
    clientSecret: "<value>",
    url: "https://trim-precedent.biz/",
    expiresAt: new Date("2023-03-04T04:40:18.515Z"),
    successUrl: "https://strident-developmental.org",
    embedOrigin: "<value>",
    amount: 945758,
    taxAmount: 877770,
    currency: "Bhutanese Ngultrum",
    subtotalAmount: 541162,
    totalAmount: 845961,
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
    customerEmail: "Melvin.Monahan29@hotmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Haiti",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": false,
    },
    product: {
      createdAt: new Date("2022-10-13T13:16:25.770Z"),
      modifiedAt: new Date("2022-07-16T02:10:57.222Z"),
      id: "<value>",
      name: "<value>",
      description:
        "noxious connect amused bowling redound corrupt honorable ah before",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-02-06T17:05:13.398Z"),
          modifiedAt: new Date("2023-06-01T03:37:00.180Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 229261,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-05-28T13:13:34.231Z"),
          modifiedAt: new Date("2022-08-25T10:24:20.426Z"),
          id: "<value>",
          description: "throughout below knowledgeably",
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
          path: "/usr/libdata",
          mimeType: "<value>",
          size: 340070,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-12-27T22:43:26.713Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-09-01T19:47:14.357Z"),
          sizeReadable: "<value>",
          publicUrl: "https://candid-hydrolyze.com",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2022-07-10T19:20:44.663Z"),
      modifiedAt: new Date("2023-09-05T11:02:41.111Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      amount: 919235,
      currency: "Brunei Dollar",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-02-08T05:00:10.593Z"),
          modifiedAt: new Date("2024-05-15T15:58:19.686Z"),
          id: "<value>",
          metadata: {
            "key": 733157,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 852391,
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