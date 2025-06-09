# Game Class Diagram (Mermaid)

```mermaid
classDiagram
    %% Superclasses
    class GameObject {
        +id: string
        +name: string
        +description: string
        +interact(): void
    }
    class Location {
        +id: string
        +name: string
        +description: string
        +objects: GameObject[]
        +characters: Character[]
        +exits: Exit[]
        +enter(): void
    }
    class Character {
        +id: string
        +name: string
        +location: Location
        +speak(): void
        +moveTo(Location): void
    }

    %% Subclasses
    class PlayerCharacter {
        <<singleton>>
        +inventory: Inventory
        +health: int
        +score: int
        +pickUp(GameObject): void
        +use(GameObject): void
    }
    class NPC {
        +dialogue: string[]
        +giveQuest(): void
    }
    class Inventory {
        <<singleton>>
        +items: GameObject[]
        +addItem(GameObject): void
        +removeItem(GameObject): void
        +listItems(): GameObject[]
    }
    class Exit {
        +from: Location
        +to: Location
        +description: string
    }

    %% Relationships
    Character <|-- PlayerCharacter
    Character <|-- NPC
    PlayerCharacter "1" o-- "1" Inventory : has
    Location o-- GameObject
    Location o-- Character
    Inventory *-- GameObject
    Location o-- Exit : has
    Exit o-- Location : leadsTo

    %% Notes
    note for GameObject "Superclass for all interactable objects."
    note for Character "Superclass for all characters, including player and NPCs."
    note for PlayerCharacter "Singleton: Only one player character exists. Each PlayerCharacter has exactly one Inventory."
    note for Inventory "Singleton: Only one inventory exists in the current design, belonging to the player."
    note for Location "Locations are connected via Exits. Characters can only move between locations if an Exit exists between them. See docs/story.md for major locations."
```

---

This diagram follows the pillars of OOP:
- **Abstraction:** Common properties and methods are abstracted into superclasses (GameObject, Character).
- **Inheritance:** PlayerCharacter and NPC inherit from Character.
- **Encapsulation:** Properties and methods are grouped logically within classes.
- **Polymorphism:** Methods like `interact()` and `speak()` can be overridden by subclasses. 