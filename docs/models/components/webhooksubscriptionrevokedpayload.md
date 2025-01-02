# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2023-09-25T08:32:22.615Z"),
    modifiedAt: new Date("2023-12-30T10:27:46.222Z"),
    id: "<value>",
    amount: 343067,
    currency: "Dobra",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2024-09-25T23:35:22.282Z"),
    currentPeriodEnd: new Date("2024-03-11T05:38:01.720Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-11-24T15:24:55.609Z"),
    endedAt: new Date("2023-10-20T00:59:50.671Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      createdAt: new Date("2025-04-13T23:48:55.441Z"),
      modifiedAt: new Date("2023-03-16T05:59:47.707Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Turner28@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Portugal",
      },
      taxId: [
        "no_voec",
      ],
      organizationId: "<value>",
      avatarUrl: "https://honored-trolley.biz/",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Gregory10@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-02-09T06:12:33.108Z"),
      modifiedAt: new Date("2024-06-03T12:09:50.425Z"),
      id: "<value>",
      name: "<value>",
      description: "toward acidic meh opposite shoot yowza",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 98238,
      },
      prices: [
        {
          createdAt: new Date("2025-08-08T23:38:36.457Z"),
          modifiedAt: new Date("2024-01-05T23:27:19.376Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 875766,
          maximumAmount: 117053,
          presetAmount: 237960,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-10-28T13:53:32.868Z"),
          modifiedAt: new Date("2023-02-11T16:01:53.719Z"),
          id: "<value>",
          description: "fuel oof matter under",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "triage",
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
          size: 546133,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-12-21T16:20:06.057Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-06-10T15:29:17.298Z"),
          sizeReadable: "<value>",
          publicUrl: "https://indolent-other.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-06-13T18:55:12.078Z"),
            modifiedAt: new Date("2023-07-02T00:29:30.258Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 58629,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-11-13T17:27:52.001Z"),
      modifiedAt: new Date("2023-05-06T16:52:19.881Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 603348,
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      durationInMonths: 70173,
      type: "percentage",
      amount: 963600,
      currency: "Naira",
      createdAt: new Date("2023-11-25T20:02:18.063Z"),
      modifiedAt: new Date("2025-11-13T22:33:54.853Z"),
      id: "<value>",
      metadata: {
        "key": 697518,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-11-25T23:42:11.595Z"),
      endsAt: new Date("2025-11-10T09:22:01.009Z"),
      maxRedemptions: 914603,
      redemptionsCount: 148004,
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