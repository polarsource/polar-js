# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2022-06-26T10:20:47.612Z"),
    modifiedAt: new Date("2023-10-21T02:29:41.820Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://grizzled-ravioli.info",
    logoUri: "https://dull-recovery.com/",
    tosUri: "https://mysterious-doubter.biz/",
    policyUri: "https://cautious-pupil.name/",
  },
  sub: {
    id: "<value>",
    email: "Velma94@gmail.com",
    avatarUrl: "https://slimy-casement.name/",
  },
  scopes: [
    "issues:read",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2023-07-29T23:36:52.386Z"),
    modifiedAt: new Date("2024-11-03T14:18:38.128Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://monstrous-metal.org/",
    logoUri: "https://parallel-baseboard.biz",
    tosUri: "https://merry-word.org/",
    policyUri: "https://mild-apparatus.org/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://amazing-traffic.info/",
  },
  scopes: [
    "orders:read",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://square-vestment.name",
    },
  ],
};
```

