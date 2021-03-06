# Receiptbook

## Index of contents
> The Baseline <br>
> The further development and ideas <br>
> Branching Strategy and Prototype Pattern <br>
> Naming conventions and best practices <br>
> Credits & Resources

## The Baseline
An organized place were to create, order, personalize and save your most important receipts of everyday-life expenses.
Receipts will be represented like cards (like in real-life paper form), and they will contain all the default informations.

## The further development and ideas

The idea is to create a `Trello` style of cards which could be organized by the user by categories, colors, and tags. This permits
the build of a well organized world of expenses receipts.

Another improvement for receipt organization by categories it can be the presence of a left panel with the list of categories.

## Branching Strategy and Prototype Pattern
In this project I will follow the **Prototype** pattern and best practices, in particular I will adopt the Github blackboard kaban cards to take 
track of the project evolution, track and issues.

I applied the standards that we can find in any enterprise working environment. I used the branching strategy of _prototype-oriented_ and _evolutionary-prototyping_ type. So I have a branch for every single task.
The main/static branches are `master`, `doc`, `dev` and `ui`.
Finally any merge will be made by a /pull request/.

The `dev` branch will be divided in two different, parallel development branches:
1. `/front-end`,
2. `/back-end`

This will help the developer to separate and to easily know what part of the project is used.

## Naming conventions and best practices

We adopt:

- [kebab-case](https://it.wikipedia.org/wiki/Kebab_case) for file, folder and branch names
- [CamelCase](https://en.wikipedia.org/wiki/Camel_case) for functions and methods
- [lowerCamelCase](https://www.w3schools.com/JS/js_conventions.asp) for variables
  accordingly with the native project setup.

I will try to split the script on multiple files and use the object oriented paradigm, where possible.

## Credits & Resources

I mainly took inspiration from from the following _back-end open-source design-systems_ and _front-end component library_ to build a high-quality digital experience:

### Bootstrap
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap Cards](https://getbootstrap.com/docs/4.3/components/card/)

### Material design
- [material.io](https://material.io/components/cards/)

Every assets and open-source code templates found on the front-end & back-end systems were used for the code snippets and to build the _"exoskeleton"_ of the project.

For the `Fonts` I used the [Google Fonts](https://fonts.google.com/) resources.