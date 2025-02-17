# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2024-03-25T15:09:55.576Z"),
    modifiedAt: new Date("2024-07-18T15:02:31.096Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://chilly-bourgeoisie.com",
    logoUri: "https://damp-alligator.net/",
    tosUri: "https://alienated-fencing.name",
    policyUri: "https://decent-bathhouse.com/",
  },
  sub: {
    id: "<value>",
    email: "Lolita47@yahoo.com",
    avatarUrl: "https://gleaming-roundabout.info",
  },
  scopes: [
    "subscriptions:write",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2024-12-20T07:15:53.081Z"),
    modifiedAt: new Date("2023-12-23T08:13:29.025Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://candid-stay.org",
    logoUri: "https://assured-sticker.org",
    tosUri: "https://self-reliant-availability.net/",
    policyUri: "https://wide-eyed-hovel.info",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://menacing-singing.org/",
  },
  scopes: [
    "openid",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://possible-numeric.net",
    },
  ],
};
```

