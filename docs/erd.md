# Entity Relationship Diagram - Web Student Quest

## Database Structure

```mermaid
erDiagram
    Player ||--o{ Inventory : has
    Player ||--|| Location : "is located in"
    Location ||--o{ Exit : has
    Location ||--o{ Item : contains
    Location ||--o{ NPC : contains
    Location ||--o{ Puzzle : contains
    Inventory ||--o{ Item : contains
    NPC ||--o{ Dialog : has
    Puzzle ||--o{ Item : "requires/gives"
    
    Player {
        int id PK
        string name
        int current_location_id FK
        int health
        datetime last_save
        string game_state
    }

    Location {
        int id PK
        string name
        string description
        boolean is_accessible
        string background_text
    }

    Exit {
        int id PK
        int from_location_id FK
        int to_location_id FK
        string direction
        boolean is_locked
        int required_item_id FK "null if not locked"
    }

    Item {
        int id PK
        string name
        string description
        boolean is_collectable
        boolean is_usable
        string item_type
        int location_id FK "null if in inventory"
    }

    Inventory {
        int id PK
        int player_id FK
        int item_id FK
        int quantity
        datetime acquired_time
    }

    NPC {
        int id PK
        string name
        string description
        int location_id FK
        string npc_type
        string state
    }

    Dialog {
        int id PK
        int npc_id FK
        string trigger_condition
        string text
        string response_options
        string next_dialog_id
    }

    Puzzle {
        int id PK
        string name
        string description
        int location_id FK
        string puzzle_type
        string solution
        boolean is_solved
        int required_item_id FK
        int reward_item_id FK
    }
```

## Entity Descriptions

### Player
- Central entity representing the player character
- Tracks current location, inventory, and game state
- Health system for potential future combat mechanics

### Location
- Represents the 10 game locations
- Contains descriptions and accessibility flags
- Links to items, NPCs, and puzzles present in the location

### Exit
- Connects locations through directional exits (N,E,S,W)
- Supports locked exits requiring specific items

### Item
- Represents collectible and usable objects
- Can be present in locations or inventory
- Used for puzzle solutions and progression

### Inventory
- Tracks items collected by the player
- Supports multiple instances of items
- Records when items were acquired

### NPC
- Represents the 2 non-player characters
- Contains state for dynamic behavior
- Links to dialog trees

### Dialog
- Structures NPC conversations
- Supports branching dialog trees
- Can trigger game state changes

### Puzzle
- Represents the 3 puzzles and boss encounter
- Tracks completion state
- Links to required items and rewards

## Implementation Notes
1. All tables will be initially implemented as CSV files
2. Foreign keys ensure data integrity
3. Timestamps enable future save/load functionality
4. Flexible structure allows for future expansion