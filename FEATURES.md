# Crème & Co. Pâtisserie — Full-Stack E-Commerce Web Application

## 1. Problem Statement
Artisan bakeries and boutique pâtisseries often struggle with generic e-commerce templates that fail to capture the elegance of handcrafted desserts while lacking intuitive filtering for dietary preferences, flavors, and gifting occasions. **Crème & Co. Pâtisserie** solves this by providing a luxury, bespoke online storefront where customers can effortlessly browse handcrafted pastries, filter by flavor or dietary needs, explore curated gift collections, and place seamless online orders with real-time cart calculations and custom order notes.

---

## 2. User Roles
1. **Guest / Customer:** Can browse the homepage, search and filter pastries by category, price, flavor, and dietary restrictions, explore curated collections, read the brand story and journal, manage items in their shopping cart, add custom gift notes, and submit inquiries via the contact form.
2. **Registered User:** Has access to all Customer features plus user authentication (signup/login), persistent cart state across sessions, and order history tracking.
3. **Admin (Bakery Manager):** Can add, update, or remove pastry products, manage collection categories, update inventory availability, and view customer inquiries and orders.

---

## 3. Feature Breakdown

### MVP Features (8–10 Must-Haves)
1. **User Authentication:** Secure user signup and login flow with encrypted password hashing.
2. **Responsive Luxury Storefront (Home):** Hero showcase, brand value highlights, featured *Handcrafted Delights* product grid, and *Our Story* preview.
3. **Interactive Shop & Multi-Criteria Filtering:** Full product catalog with category tabs (*Pastries, Cakes, Macarons, Tarts, Cookies, Gift Boxes*) and sidebar filters (*Price range, Flavors, Dietary tags*).
4. **Live Product Search & Sorting:** Search bar with quick suggestions and sorting options (*Featured, Popularity, Price*).
5. **Curated Collections Showcase:** Dedicated collections page categorized by dessert type and special occasions (*Birthday, Anniversary, Celebration*).
6. **Dynamic Shopping Cart & Order Summary:** Add-to-cart functionality, live quantity increment/decrement controls, item removal, custom order gift notes, and automatic subtotal/free-shipping ($30+ threshold) calculation.
7. **Brand Storytelling & Journal Pages:** Editorial *Our Story* and *The Crème Journal* pages highlighting craftsmanship, core values, and baking inspirations.
8. **Interactive Contact & Inquiry Form:** Contact page displaying patisserie details (Jaipur location, hours, phone, email) alongside a validated inquiry submission form.
9. **RESTful Backend API & Database Integration:** Persistent storage for users, products, collections, cart items, and contact messages with a `/health` status endpoint.

### Future Enhancements (Post-MVP)
1. **Online Payment Gateway Integration:** Real-time checkout processing via Stripe or Razorpay.
2. **Custom Cake Builder:** Interactive configurator allowing customers to choose cake tiers, fillings, frostings, and custom inscriptions.
3. **Order Tracking Dashboard:** Real-time order status updates (*Baking, Quality Check, Out for Delivery*) for registered customers.
4. **Admin Analytics Panel:** Sales metrics, popular flavor insights, and inventory low-stock alerts.
