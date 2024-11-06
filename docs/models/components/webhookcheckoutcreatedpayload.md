# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2024-10-30T06:10:40.764Z"),
    modifiedAt: new Date("2023-08-02T02:04:13.457Z"),
    id: "<value>",
    status: "confirmed",
    clientSecret: "<value>",
    url: "https://oily-distinction.biz/",
    expiresAt: new Date("2023-04-21T12:43:04.324Z"),
    successUrl: "https://pointless-executor.com",
    embedOrigin: "<value>",
    amount: 244046,
    taxAmount: 452831,
    currency: "Venezuelan bolívar",
    totalAmount: 610363,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Laurence_Harber@hotmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Tunisia",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": "<value>",
    },
    product: {
      createdAt: new Date("2024-06-08T19:16:48.368Z"),
      modifiedAt: new Date("2023-10-08T06:12:11.011Z"),
      id: "<value>",
      name: "<value>",
      description: "but sizzle yippee honestly unsung drat silver",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-05-31T08:15:17.595Z"),
          modifiedAt: new Date("2024-08-02T18:33:58.243Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 363615,
          maximumAmount: 885282,
          presetAmount: 40916,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-10-19T07:36:29.018Z"),
          modifiedAt: new Date("2022-08-16T14:40:51.811Z"),
          id: "<value>",
          description: "iterate drat intently huzzah",
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
          path: "/media",
          mimeType: "<value>",
          size: 14614,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-15T01:48:27.572Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-11-28T22:17:24.181Z"),
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2024-07-14T07:58:13.561Z"),
      modifiedAt: new Date("2024-10-26T15:27:03.943Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2022-03-31T05:08:04.982Z"),
          modifiedAt: new Date("2022-12-10T11:19:22.816Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 742652,
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
| `data`                                                                                                       | [components.PolarCheckoutSchemasCheckoutInput](../../models/components/polarcheckoutschemascheckoutinput.md) | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |