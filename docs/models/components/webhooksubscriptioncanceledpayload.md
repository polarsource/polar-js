# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled by the user.
They might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2024-07-29T19:18:16.265Z"),
    modifiedAt: new Date("2023-05-21T22:57:42.336Z"),
    id: "<value>",
    amount: 367251,
    currency: "CFA Franc BEAC",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2022-03-01T17:31:10.140Z"),
    currentPeriodEnd: new Date("2022-07-29T13:22:57.325Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-10-25T00:19:28.038Z"),
    endedAt: new Date("2023-12-27T18:04:43.696Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 869602,
    },
    customer: {
      createdAt: new Date("2024-12-24T18:31:51.343Z"),
      modifiedAt: new Date("2024-04-17T04:37:18.826Z"),
      id: "<value>",
      metadata: {
        "key": 833935,
      },
      email: "Marjory_Daugherty@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Tajikistan",
      },
      taxId: [
        "br_cnpj",
      ],
      organizationId: "<value>",
      avatarUrl: "https://handy-whale.org",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Flavio_Yost47@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-02-07T10:09:35.758Z"),
      modifiedAt: new Date("2024-07-29T21:23:38.273Z"),
      id: "<value>",
      name: "<value>",
      description: "home naturally watery before",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 96803,
      },
      prices: [
        {
          createdAt: new Date("2023-05-08T20:45:44.261Z"),
          modifiedAt: new Date("2022-11-09T00:35:33.800Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 154869,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-02-23T13:34:54.556Z"),
          modifiedAt: new Date("2022-06-09T23:00:47.892Z"),
          id: "<value>",
          description:
            "metabolise impact worth shameful mount gradient oof even",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            archived: {
              "key": false,
            },
            files: [
              "<value>",
            ],
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/log",
          mimeType: "<value>",
          size: 652013,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-07-07T19:22:40.277Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-09-04T04:26:49.288Z"),
          sizeReadable: "<value>",
          publicUrl: "https://pleasing-help.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-02-14T17:30:08.402Z"),
            modifiedAt: new Date("2024-05-10T10:23:09.731Z"),
            id: "<value>",
            metadata: {
              "key": 508271,
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
          order: 787467,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-11-24T23:28:50.658Z"),
      modifiedAt: new Date("2024-05-19T03:49:33.823Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 826431,
      maximumAmount: 953921,
      presetAmount: 388851,
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      basisPoints: 288348,
      createdAt: new Date("2022-11-16T07:58:25.136Z"),
      modifiedAt: new Date("2024-10-03T03:11:16.049Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2022-08-11T21:05:33.502Z"),
      endsAt: new Date("2023-09-17T18:30:47.093Z"),
      maxRedemptions: 745764,
      redemptionsCount: 353036,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [components.WebhookSubscriptionCanceledPayloadType](../../models/components/webhooksubscriptioncanceledpayloadtype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `data`                                                                                                                 | [components.Subscription](../../models/components/subscription.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |