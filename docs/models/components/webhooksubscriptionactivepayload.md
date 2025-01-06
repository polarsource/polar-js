# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2024-04-21T01:59:26.650Z"),
    modifiedAt: new Date("2024-09-22T15:13:56.903Z"),
    id: "<value>",
    amount: 467109,
    currency: "Sudanese Pound",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2024-01-05T23:44:25.788Z"),
    currentPeriodEnd: new Date("2024-10-29T15:27:04.484Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-04-30T10:48:39.079Z"),
    startedAt: new Date("2023-03-25T10:55:20.447Z"),
    endsAt: new Date("2023-06-23T05:36:11.637Z"),
    endedAt: new Date("2024-12-29T22:18:25.349Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 982804,
    },
    customer: {
      createdAt: new Date("2024-07-01T09:50:06.034Z"),
      modifiedAt: new Date("2023-05-30T09:02:00.896Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Lance.Weimann7@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Djibouti",
      },
      taxId: [
        "mx_rfc",
      ],
      organizationId: "<value>",
      avatarUrl: "https://lumpy-jacket.info/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Jannie_Cummerata82@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-05-24T13:18:45.811Z"),
      modifiedAt: new Date("2024-10-29T13:13:20.385Z"),
      id: "<value>",
      name: "<value>",
      description: "meanwhile even for meanwhile",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2023-08-06T10:53:27.934Z"),
          modifiedAt: new Date("2024-10-22T22:18:54.790Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 340231,
          maximumAmount: 238371,
          presetAmount: 510401,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-09-01T11:10:06.607Z"),
          modifiedAt: new Date("2025-08-22T04:13:05.621Z"),
          id: "<value>",
          description: "cantaloupe inside towards ignorance",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            note: "<value>",
          },
          isTaxApplicable: false,
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/opt/share",
          mimeType: "<value>",
          size: 278469,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-01-06T12:53:03.799Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-07-24T04:31:39.728Z"),
          sizeReadable: "<value>",
          publicUrl: "https://trim-doorpost.org",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-11-23T03:41:08.511Z"),
            modifiedAt: new Date("2023-06-17T11:27:07.354Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 986993,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-02-09T23:02:01.882Z"),
      modifiedAt: new Date("2024-01-03T11:49:15.210Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 104990,
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 497363,
      createdAt: new Date("2023-09-14T21:12:33.057Z"),
      modifiedAt: new Date("2024-10-11T15:56:52.634Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-12-26T01:49:51.159Z"),
      endsAt: new Date("2025-02-07T19:37:59.654Z"),
      maxRedemptions: 427859,
      redemptionsCount: 964052,
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