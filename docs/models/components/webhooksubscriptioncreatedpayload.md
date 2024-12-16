# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2024-06-13T17:38:48.093Z"),
    modifiedAt: new Date("2023-08-29T15:05:57.733Z"),
    id: "<value>",
    amount: 851809,
    currency: "Yemeni Rial",
    recurringInterval: "month",
    status: "past_due",
    currentPeriodStart: new Date("2024-12-29T19:14:03.123Z"),
    currentPeriodEnd: new Date("2024-12-18T17:26:12.157Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-10-24T05:48:28.761Z"),
    endedAt: new Date("2022-05-21T07:27:39.514Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": 2064,
    },
    customer: {
      createdAt: new Date("2022-08-07T00:09:49.489Z"),
      modifiedAt: new Date("2024-11-13T21:51:48.921Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Dylan.Rempel79@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Heard Island and McDonald Islands",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://carefree-grouper.biz",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Faye_Bailey23@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-05-27T01:55:24.228Z"),
      modifiedAt: new Date("2024-11-13T07:16:15.727Z"),
      id: "<value>",
      name: "<value>",
      description: "usefully beneath frankly for unwelcome",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-09-07T06:05:32.228Z"),
          modifiedAt: new Date("2024-01-03T08:48:44.316Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 286716,
          maximumAmount: 19462,
          presetAmount: 399222,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-08-31T12:55:25.056Z"),
          modifiedAt: new Date("2024-07-31T21:36:43.500Z"),
          id: "<value>",
          description:
            "thoughtfully sternly hence amid phooey yippee whose barring",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 758194,
              timeframe: "month",
            },
            activations: {
              limit: 573610,
              enableCustomerAdmin: false,
            },
            limitUsage: 955047,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/tmp",
          mimeType: "<value>",
          size: 861591,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-01-29T13:41:23.264Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-08-30T22:04:58.019Z"),
          sizeReadable: "<value>",
          publicUrl: "https://internal-amnesty.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-05-11T15:54:08.244Z"),
            modifiedAt: new Date("2024-03-30T19:59:30.170Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 300651,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-08-25T12:51:13.766Z"),
      modifiedAt: new Date("2023-06-03T18:22:20.556Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "once",
      type: "fixed",
      amount: 982991,
      currency: "Pula",
      createdAt: new Date("2022-12-29T08:00:18.342Z"),
      modifiedAt: new Date("2022-02-25T22:53:59.329Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2022-12-18T01:51:45.505Z"),
      endsAt: new Date("2024-11-03T16:48:56.969Z"),
      maxRedemptions: 845154,
      redemptionsCount: 382764,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionCreatedPayloadType](../../models/components/webhooksubscriptioncreatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.Subscription](../../models/components/subscription.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |