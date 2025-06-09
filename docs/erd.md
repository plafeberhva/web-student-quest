# Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    GAME_OBJECT {
        int id
        string name
        string description
    }

    LOCATION {
        int id
        string name
        string description
    }

    CHARACTER {
        int id
        string name
        string description
        int location_id
    }

    PLAYER_CHARACTER {
        int id
        int health
        int score
        int inventory_id
    }

    NPC {
        int id
        string dialogue
    }

    INVENTORY {
        int id
        int player_character_id
    }

    OBJECT {
        int id
        int location_id
    }

    EXIT {
        int id
        int from_location_id
        int to_location_id
        string description
    }

    %% Inheritance (TPT): Subclass tables reference superclass tables by id
    PLAYER_CHARACTER ||--|| CHARACTER : "is a"
    NPC ||--|| CHARACTER : "is a"
    CHARACTER }o--|| LOCATION : "is in"
    OBJECT ||--|| GAME_OBJECT : "is a"
    OBJECT }o--|| LOCATION : "is in"
    PLAYER_CHARACTER ||--|| INVENTORY : "has inventory"
    INVENTORY ||--|| PLAYER_CHARACTER : "belongs to"
    INVENTORY ||--o{ GAME_OBJECT : "contains"
    LOCATION ||--o{ EXIT : "has exits"
    EXIT }o--|| LOCATION : "leads to"
```

---

- Table Per Type (TPT) strategy: Each subclass table (PLAYER_CHARACTER, NPC, OBJECT) references its superclass (CHARACTER or GAME_OBJECT) by id.
- Every `CHARACTER` and `OBJECT` is always in a `LOCATION` (including inventory as a special location).
- `INVENTORY` has a 1:1 relationship with `PLAYER_CHARACTER` (each player has only one inventory).
- `INVENTORY` contains `GAME_OBJECT`s.
- `EXIT` connects locations (rooms) and can be zero or more per location. Characters can only move between locations if an EXIT (connection) exists between them.
- Major locations are listed in `docs/story.md` under "Major Locations". 