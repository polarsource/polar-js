# WebhookSubscriptionUpdatedPayload

Sent when a subscription is updated. This event fires for all changes to the subscription, including renewals.

If you want more specific events, you can listen to `subscription.active`, `subscription.canceled`, and `subscription.revoked`.

To listen specifically for renewals, you can listen to `order.created` events and check the `billing_reason` field.

**Discord & Slack support:** On cancellation and revocation. Renewals are skipped.

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2024-12-04T08:48:14.783Z"),
    modifiedAt: new Date("2023-05-09T01:09:28.036Z"),
    id: "<value>",
    amount: 227129,
    currency: "Pound Sterling",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2023-02-22T02:51:06.328Z"),
    currentPeriodEnd: new Date("2023-06-09T12:27:33.773Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-09-23T07:43:22.108Z"),
    endedAt: new Date("2024-12-27T17:25:33.535Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2023-01-23T08:27:25.525Z"),
      modifiedAt: new Date("2022-10-16T03:05:22.272Z"),
      id: "<value>",
      metadata: {
        "key": 100804,
      },
      email: "Shyann_Hilpert@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "San Marino",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://close-dependency.com/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Georgiana81@yahoo.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-04-02T09:01:37.891Z"),
      modifiedAt: new Date("2022-11-12T11:10:45.405Z"),
      id: "<value>",
      name: "<value>",
      description: "sweet for badly incidentally whereas beneath",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 96711,
      },
      prices: [
        {
          createdAt: new Date("2023-06-16T10:56:54.092Z"),
          modifiedAt: new Date("2024-01-19T18:40:42.345Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 821238,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-04-06T11:35:34.778Z"),
          modifiedAt: new Date("2024-02-28T02:36:07.300Z"),
          id: "<value>",
          description: "overburden mountain wrongly plan psst promptly ha",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {},
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/include",
          mimeType: "<value>",
          size: 191571,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-12-27T17:49:51.811Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-07-22T01:12:42.157Z"),
          sizeReadable: "<value>",
          publicUrl: "https://smart-overcoat.org/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2022-06-19T02:07:21.588Z"),
            modifiedAt: new Date("2022-12-09T02:01:52.269Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 756833,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-01-04T23:23:29.876Z"),
      modifiedAt: new Date("2022-08-26T03:38:10.416Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "forever",
      durationInMonths: 649373,
      type: "percentage",
      basisPoints: 283557,
      createdAt: new Date("2022-11-10T14:49:35.672Z"),
      modifiedAt: new Date("2022-12-10T12:12:48.348Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-09-15T12:11:57.238Z"),
      endsAt: new Date("2024-07-29T19:18:16.265Z"),
      maxRedemptions: 461639,
      redemptionsCount: 367251,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.Subscription](../../models/components/subscription.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |