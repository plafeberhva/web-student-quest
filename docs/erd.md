# Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    CHARACTER {
        int id
        string name
        string description
        int location_id
    }
    
    LOCATION {
        int id
        string name
        string description
    }
    
    OBJECT {
        int id
        string name
        string description
        int location_id
    }
    
    EXIT {
        int id
        int from_location_id
        int to_location_id
        string description
    }

    CHARACTER }o--|| LOCATION : "is in"
    OBJECT }o--|| LOCATION : "is in"
    LOCATION ||--o{ EXIT : "has exits"
    LOCATION ||--o{ EXIT : "is destination for"
```

---

- Every `CHARACTER` and `OBJECT` is always in a `LOCATION` (including inventory as a special location).
- `LOCATION` can represent rooms or the player inventory.
- `EXIT` connects locations (rooms) and can be zero or more per location. 