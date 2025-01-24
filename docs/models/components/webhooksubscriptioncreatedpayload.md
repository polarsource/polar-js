# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2024-07-04T16:31:32.400Z"),
    modifiedAt: new Date("2023-07-06T02:55:55.961Z"),
    id: "<value>",
    amount: 148379,
    currency: "Leone",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2025-12-12T13:02:43.922Z"),
    currentPeriodEnd: new Date("2025-12-23T23:06:45.346Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-05-11T00:03:45.342Z"),
    startedAt: new Date("2025-10-25T07:53:21.937Z"),
    endsAt: new Date("2023-09-26T01:09:32.384Z"),
    endedAt: new Date("2024-05-17T04:48:55.010Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2024-09-12T16:15:37.701Z"),
      modifiedAt: new Date("2023-07-23T15:43:25.483Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Florence_Kassulke40@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Azerbaijan",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://wicked-cinema.net/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Keven.Witting@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-03-09T14:44:52.776Z"),
      modifiedAt: new Date("2025-11-13T04:34:33.275Z"),
      id: "<value>",
      name: "<value>",
      description: "solidly upwardly rue alarmed beyond quaver shaft",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2023-04-18T04:47:54.555Z"),
          modifiedAt: new Date("2025-08-27T06:12:53.981Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 769156,
          maximumAmount: 711871,
          presetAmount: 53733,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-03T12:13:54.462Z"),
          modifiedAt: new Date("2025-06-19T19:21:37.465Z"),
          id: "<value>",
          description:
            "after vainly scoop weighty beneath irritably provided sorrowful",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            guildId: "<id>",
            roleId: "<id>",
            guildToken: "<value>",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/mail",
          mimeType: "<value>",
          size: 36691,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-11T13:12:44.267Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-04-08T21:22:45.615Z"),
          sizeReadable: "<value>",
          publicUrl: "https://mindless-dash.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-02-03T02:11:26.549Z"),
            modifiedAt: new Date("2025-08-15T03:47:39.234Z"),
            id: "<value>",
            metadata: {
              "key": 502393,
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
          order: 540048,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-01-13T23:06:27.556Z"),
      modifiedAt: new Date("2023-04-21T19:31:53.154Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 318379,
      maximumAmount: 168142,
      presetAmount: 556133,
      recurringInterval: "month",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 620126,
      type: "percentage",
      basisPoints: 985379,
      createdAt: new Date("2025-08-30T11:05:45.637Z"),
      modifiedAt: new Date("2025-04-18T12:23:59.794Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-02-05T15:08:18.944Z"),
      endsAt: new Date("2023-08-09T14:07:15.623Z"),
      maxRedemptions: 487148,
      redemptionsCount: 990369,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |