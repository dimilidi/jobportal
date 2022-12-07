# job-portal
[Design](https://www.figma.com/file/cmWtNE21nByCtTRUkoR2uS/Wireframing-DT?node-id=0%3A1&t=eXEWluvSXX6WsSus-0)



## Api Endpoints

<!-- Route für Listenansicht. Alle User haben Zugriff. -->
### 1. GET /ads

Query-Params

- search=DCI (Search-Field)
- location=Berlin
- page=1

Response-Body

```javascript
[
    {
        _id: "123",
        title: "My Title",
        description: "something",
        location: "My location",
        category: "Provider",
        wage: 12,
        user: {
            name: "User Name"
        },
        createdAt: 2022-11-11T19:46:39.731+00:00,
        updatedAt: 2022-11-11T19:46:39.731+00:00
    }
]
```


<!-- Get Anzeige by Id. -->
### 2. GET /ads/:id

<!-- Ohne auth. Jeder User hat Zugriff. -->
Response-Body

```javascript
    {
        _id: "123",
        title: "My Title",
        description: "something",
        location: "My location",
        category:"Provider",
        wage: 12,
        user: {
            name: "User Name"
        },
        createdAt: 2022-11-11T19:46:39.731+00:00,
        updatedAt: 2022-11-11T19:46:39.731+00:00
    }
```

<!-- Mit auth. Nur Angemeldete haben Zugriff. -->
Response-Body

```javascript
    {
        _id: "123",
        title: "My Title",
        description: "something",
        location: "My location",
        category:"Provider",
        contactVia: ["phone"],
        wage: 12,
        user: {
            name: "User Name",
            telephone: "0049534643636"
        },
        createdAt: 2022-11-11T19:46:39.731+00:00,
        updatedAt: 2022-11-11T19:46:39.731+00:00
    }
```


<!-- Ab hier nur mit Authorisation -->

### 3. POST /ads/post

Post-Body

```javascript
    {
        title: "My Title",
        description: "something",
        location: "My location",
        category: "Provider",
        wage: 12, 
        contactVia: ["email"]
        user: "Udel17555klmjer54gj7"
    }
```

Response-Body

```javascript
    {
        _id: "123",
        title: "My Title",
        description: "something",
        location: "My location",
        category: "Provider",
        wage: 12,
        contactVia: ["email"],
        user: "Udel17555klmjer54gj7",
        createdAt: 2022-11-11T19:46:39.731+00:00,
        updatedAt: 2022-11-11T19:46:39.731+00:00
    }
```


### 4. POST /user/login

Post-Body

```javascript
    {
     email: "my@mail.de",
     password: "123456"
    }
```

Response-Body

```javascript
    {
     _id: "123",
     name: "User Name",
     email: "my@mail.de",
     avatar: "url-to-avatar",
     sector: "Web Development",
     city: "Berlin",
     description: "something",
     telephone: "00496666666666"
    }
```

### 5. POST /user/register

Post-Body

```javascript
    {
     email: "my@mail.de",
     password: "123456",
     name: "User Name"
    }
```

Response-Body

```javascript
    {
     _id:"123",
     name: "User Name",
     email: "my@mail.de"
    }
```


### 6. GET /user

Response-Body

```javascript
    {
     _id:"123",
     name: "User Name",
     email: "my@mail.de",
     avatar: "url-to-avatar",
     sector: "Web Development",
     city: "My address",
     telephone: "004966666666666",
     description: "something"
    }
```

### 7. PUT /user/edit-account

Put-Body

```javascript
    {
     password: "123456"
    }
```

Response-Body

```javascript
    {
     user //ohne Passwort
    }
```
