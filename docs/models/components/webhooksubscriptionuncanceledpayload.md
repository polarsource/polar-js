# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUncanceledPayload = {
  data: {
    createdAt: new Date("2025-04-24T22:48:28.937Z"),
    modifiedAt: new Date("2024-01-26T13:27:14.904Z"),
    id: "<value>",
    amount: 17747,
    currency: "Nuevo Sol",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2025-10-18T05:26:52.000Z"),
    currentPeriodEnd: new Date("2025-12-31T22:39:27.766Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-10-23T19:09:19.930Z"),
    startedAt: new Date("2023-11-27T17:43:11.986Z"),
    endsAt: new Date("2023-06-30T19:52:08.607Z"),
    endedAt: new Date("2024-05-16T14:56:25.246Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      createdAt: new Date("2025-07-16T13:54:19.093Z"),
      modifiedAt: new Date("2023-09-08T09:58:53.295Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Earlene.Jacobs@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Bolivia",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://sleepy-unique.net/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Jarrell36@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-10-28T23:39:35.956Z"),
      modifiedAt: new Date("2025-08-02T02:25:14.445Z"),
      id: "<value>",
      name: "<value>",
      description: "the thorn chime jealous bah before than overvalue yet",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2024-12-24T00:37:49.378Z"),
          modifiedAt: new Date("2025-06-25T01:04:13.691Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-06-24T05:48:49.363Z"),
          modifiedAt: new Date("2023-08-13T13:06:10.202Z"),
          id: "<value>",
          description:
            "because gadzooks including unbearably gah rudely blah glossy substantial",
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
          path: "/etc/periodic",
          mimeType: "<value>",
          size: 828390,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-03-06T06:10:43.553Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-08-08T09:17:22.587Z"),
          sizeReadable: "<value>",
          publicUrl: "https://classic-newsprint.biz",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-12-12T09:44:42.528Z"),
            modifiedAt: new Date("2023-03-18T21:50:43.904Z"),
            id: "<value>",
            metadata: {
              "key": 963600,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 611783,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-11-13T22:33:54.853Z"),
      modifiedAt: new Date("2024-03-02T14:29:48.031Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 697518,
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      durationInMonths: 148004,
      type: "fixed",
      basisPoints: 809643,
      createdAt: new Date("2025-09-18T19:37:34.618Z"),
      modifiedAt: new Date("2024-06-24T07:10:39.639Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-03-18T11:42:39.318Z"),
      endsAt: new Date("2023-08-29T21:44:05.572Z"),
      maxRedemptions: 149376,
      redemptionsCount: 601161,
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