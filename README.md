# Late Night Food

🔥 Visit the **[Live Site](https://late-night-food-ordering-app.vercel.app/)**!

<p>
   <img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" title="HTML5" alt="HTML5">
   <img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white" title="CSS3" alt="CSS3">
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" title="JavaScript" alt="JavaScript">
   <img src="https://img.shields.io/badge/Font%20Awesome-528DD7.svg?style=for-the-badge&logo=Font-Awesome&logoColor=white" title="Font Awesome" alt="Font Awesome">
   <img src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=Git&logoColor=white" title="Git" alt="Git">
   <img src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF.svg?style=for-the-badge&logo=Adobe-Photoshop&logoColor=white" title="Photoshop" alt="Photoshop">
</p>

![screenshot](screenshots/order-details.gif)

I got the inspiration from **[Scrimba](https://scrimba.com/)**'s **Solo Project** to cap off their **Frontend Developer Career Path**'s **Module 5: Essential JavaScript**. For Scrimba Solo Projects, you are given requirements, optional stretch goals and a design, then need to figure it all out yourself.

![Requirements slide with project example](/screenshots/Scrimba-requirements.png)

<hr>

## 📜 Table of Contents

- [💪 My Motivation](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#my-motivation)
- [🎯 MVP](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#mvp)
- [🎨 Design Choices](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#design-choices)
- [🔄 My Process](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#my-process)
  - [Memory Challengers 🧠]()
    - [Collapsing Margins]()
    - [Variables Can Help Us!]()
    - [Data Attributes]()
- [🔖 Resources](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#resources)

<hr>

## 💪 My Motivation

[Back to Table of Contents](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#table-of-contents)

The design looked cool, but I'm not really a hamburger 🍔 kind of girl. So I got to thinking... _'What kind of food would make me super excited?'_ 🤔

Well, I miss tons of things from living in China for 15 years... Especially stopping for a chill late night dinner after teaching until 9 p.m., then commuting 1 hour plus back to my neighbourhood. 😅

China has restaurants everywhere and a vibrant late night food scene. Food stalls on the side of streets stay open until 5 in the morning!

![bbq skewers, dumplings, fried noodles](/screenshots/street-food.png)

But what about those times you just want to head home with tasty treats? 🥡

In comes my app! 📱 When you're close to home, simply place your order, get into your comfies, and have your late night snack brought to your door!

## 🎯 MVP

[Back to Table of Contents](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#table-of-contents)

I had already thrown out the **design spec**, but there were certain things I felt were must haves:

- Rendering the **menu** 🍜 with JavaScript including the name, description, price and an Add button.
- Working Add ➕ buttons
- Bill information that would pop up only when something was added
- Ability to remove ➖ items when desired
- Allowing users to order multiples of items
- Total price to be displayed
- Ability to Place Order
- Payment Modal

## ✨ My Stretch Goals

**Late Night Food** being a Chinese food ordering app got me thinking about the **Payment Modal**...

In China, _everyone_ uses [WeChat](https://www.wechat.com/), which is a **super app** - _like what Elon Musk talks about transforming **Twitter** into_. It's one app to talk with your friends in chat, voice and video, view people's posts and news, play games, and, drum roll 🥁, **make payments**.

So, of course, I had to use WeChat to pay, right?!

I ran into one issue... I coded it **mobile-first** and initially added the method I remember seeing most often - people using their phones to **scan a QR code**. But if they were using their phone to order, what good was a QR code on their phone to scan with said phone? LOL

![tweet about people using their phone to order, being presented with a QR code to scan with the phone they are currently on](screenshots/tweet-about-qrcode.png)

Obviously I had to consider some more features:

- media queries in JavaScript to show the QR code for tablet or desktop, then something else for mobile...

- how to process the order on mobile

- automatically move the focus to the next input box

- simulate the payment being processed (_because I'd already gone this far_)

- randomize the 'processing times' in the payment modal

## 🎨 Design Choices

[Back to Table of Contents](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#table-of-contents)

Of course this was the most difficult part! 🤣 First up I choose the food images.

I liked how the **Scrimba** design used emojis, but a search didn't yield the variety I wanted...

I considered using **jpg**'s, but decided I wanted a **cleaner UI**...

So I searched for icons, and, wow, did [Icons8](https://icons8.com/) really deliver! They had a great free collection and you could even use **CDN**'s!

Then I went on an exhaustive search for Asian-looking Google Fonts. I kept ending up with Chinese-language ones! 🤣 But I really liked **[Faster One](https://fonts.google.com/specimen/Faster+One?query=faster+one)** for the **title** as it suggested speed to me.

![Late Night Food title font](screenshots/faster-one.png)

I also went through multiple **header** images. One where I took my **accent colour** from a Chinese lantern, but I ultimately ended up going with with this cool Chinese roof image.

## 🔄 My Process

[Back to Table of Contents](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#table-of-contents)

After cracking the **design process**, which I absolutely love ❤️, but can certainly take up time, I was ready to go! 🏎️

I'm breaking this section up into two parts:

- things I knew but needed reminders about, either through Googling or referring to past projects, &

- shiny new things I learned.

### Memory Challenges 🧠

[Back to Table of Contents](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#table-of-contents)

#### Collapsing Margins

[Back to Table of Contents](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#table-of-contents)

I have been lucky to not have to deal with this much, but maybe too lucky as I had forgotten how to fix it! 😉

Originally my header image had a big margin above it. And I couldn't remember what to Google to find the solution. After much, much, _much_ searching I found this fix.

```css
.container {
  overflow: auto;
}
header {
  padding: 1px;
}
```

#### Variables Can Help Us!

[Back to Table of Contents](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#table-of-contents)

After getting the initial `totalPrice` displayed for user's orders, I was a tad puzzled on how to let them order **multiples of menu items**.

Happily I wasn't completely dense and added a new `numberOrdered` variable to my `menuArr`.

![data.js file with Menu Array showing which properties and keys I chose, including name, id, description, price, image, and numberOrdered](/screenshots/data.png)

This allows a simple expression to be run when generating the Bill.

![Multiplying number of specific menu items ordered with their price](screenshots/numberOrdered.png)

> The need to use `Number()` tickles my curiousity about **TypeScript** - so much to learn! ❤️

It also made **deleting items** easier as I could just **decrement** them.

![Decrementing the number Ordered variable in the Delete function](screenshots/decrement-numberOrdered.png)

#### Data Attributes

[Back to Table of Contents](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#table-of-contents)

I had settled 7 menu items (_only limited by which images to could easily find with a CDN_) each with an Add Button, so I thought what a great use for **data attributes**?

I first put the `data-id` on each button. This **customizable** attribute let's you store any data you want, in this case the menu item's id.

I then set up the **click event listener** to listen for a click on that particular element.

![click event listener for e dot target dot dataset dot id](screenshots/event-listener-add-id.png)

## 🔖 Resources

[Back to Table of Contents](https://github.com/JoleneKearse/Late-Night-Food-Ordering-App#table-of-contents)

- [Icons8](https://icons8.com/) for small my food icons
- ['Faster One' Google Font](https://fonts.google.com/specimen/Faster+One?query=faster+one)
- [Working with JavaScript Media Queries](https://css-tricks.com/working-with-javascript-media-queries/)
