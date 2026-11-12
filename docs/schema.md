# Crème & Co. Pâtisserie — Database Schema & Architecture

## 1. Entity-Relationship (ER) Diagram

```text
+------------------+       +--------------------+       +------------------+

|      USERS       |       |     CART_ITEMS     |       |     PRODUCTS     |
+------------------+       +--------------------+       +------------------+

| PK id            |───┐   | PK id              |   ┌───| PK id            |
|    full_name     |   └──<| FK user_id         |   │   |    name          |
|    email         |       | FK product_id      |>──┘   |    description   |
|    password_hash |       |    quantity        |       |    price         |
|    created_at    |       |    gift_note       |       |    category      |
+------------------+       +--------------------+       |    flavor        |

                                                        |    dietary_tag   |
+------------------+                                    |    image_url     |

| CONTACT_MESSAGES |                                    +------------------+
+------------------+                                             │

| PK id            |                                             ▼
|    sender_name   |                                    +------------------+
|    sender_email  |                                    |   COLLECTIONS    |
|    subject       |                                    +------------------+
|    message       |                                    | PK id            |
|    submitted_at  |                                    |    title         |
+------------------+                                    |    occasion      |
                                                        +------------------+
```

---

## 2. Database Tables Breakdown

### 1. `users` (Customer Accounts)
* `id` (Primary Key, Auto-Increment)
* `full_name` (Text, Required)
* `email` (Text, Unique, Required)
* `password_hash` (Text, Required — stores encrypted passwords)
* `created_at` (Timestamp)

### 2. `products` (Pastries, Cakes, Macarons, Tarts, Cookies)
* `id` (Primary Key, Auto-Increment)
* `name` (Text — e.g., *Raspberry Cloud*, *Berry Choux*, *Rose Macaron*)
* `description` (Text — e.g., *Light mousse, raspberry compote, almond sponge*)
* `price` (Decimal — e.g., *8.50*)
* `category` (Text — *Pastries, Cakes, Macarons, Tarts, Cookies, Gift Boxes*)
* `flavor` (Text — *Vanilla, Chocolate, Berry, Pistachio, Caramel*)
* `dietary_tag` (Text — *Vegetarian, Gluten-Free, Standard*)
* `image_url` (Text — Path to pastry image)

### 3. `collections` (Curated Gift & Occasion Sets)
* `id` (Primary Key, Auto-Increment)
* `title` (Text — e.g., *Cakes, Dessert Favorites, Seasonal Treats*)
* `occasion` (Text — *Birthday, Anniversary, Celebration, Everyday Treat*)
* `item_count` (Integer)

### 4. `cart_items` (Active Shopping Cart)
* `id` (Primary Key, Auto-Increment)
* `user_id` (Foreign Key → `users.id`)
* `product_id` (Foreign Key → `products.id`)
* `quantity` (Integer, Default: 1)
* `gift_note` (Text, Optional — custom note added on Cart page)

### 5. `contact_messages` (Customer Inquiries)
* `id` (Primary Key, Auto-Increment)
* `sender_name` (Text)
* `sender_email` (Text)
* `subject` (Text)
* `message` (Text)
* `submitted_at` (Timestamp)
