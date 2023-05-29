# Holidaze Bendik kvam

My final exam
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## table of contents

- [status](#status)
- [Installation](#installation)
- [links](#links)
- [customisation](#customisation)
  - [MUI](#mui)
  - [antD](#antd)
- [Design](#design)
  - [wireframe](#wireframe)
  - [ideas](#ideas)
- [Packages used](#packages-used)
- [folder construction](#folder-construction)
- [context](#context)
- [Hooks](#hooks)
- [schemas](#schemas)
- [Modals](#modals)
- [button](#button)
- [redirects](#redirects)
- [secrets](#secrets)
- [small bugs](#small-bugs)

## status

[![Netlify Status](https://api.netlify.com/api/v1/badges/78e1ecf8-74bb-41f4-8e5c-661e2ef7daa1/deploy-status)](https://app.netlify.com/sites/holidazeresorts/deploys)

## Installation

to install this project you need to clone it from github and open it in a code editor
to run the dev mode, use;

install the packages with

```bash
npm install
```

start the dev server with

```bash
npm start
```

to build the project, use;

```bash
npm run build
```

## links

- [Netlify](https://holidazeresorts.netlify.app)
- [figma prototype phone](https://www.figma.com/file/jZ7CFJzHLIRjoVWJP9dmBc/wireframe-and-design?type=design&node-id=155%3A5109&t=krswGgiS1dZrZAub-1)
- [figma prototype pc](https://www.figma.com/file/jZ7CFJzHLIRjoVWJP9dmBc/wireframe-and-design?type=design&node-id=204%3A19512&t=krswGgiS1dZrZAub-1)
- [styleguide / styletile](https://www.figma.com/file/jZ7CFJzHLIRjoVWJP9dmBc/wireframe-and-design?type=design&node-id=37%3A470&t=krswGgiS1dZrZAub-1)
- [figma whole project](https://www.figma.com/file/jZ7CFJzHLIRjoVWJP9dmBc/wireframe-and-design?type=design&t=krswGgiS1dZrZAub-1)
- [kaban and gantt(github projects)- todo = kanban, gant = gant](https://github.com/users/puggen1/projects/5/views/1)
- [github](https://github.com/puggen1/holidaze-bendik-kvam)

## customisation

the project have been customized a little bit
i have for example added craco instead of the regular cra starter
this is to be able to customize the antd components.

there is also a theme.js and style.css to handle some of the global css and keeping controll over antd and MUI

### MUI

i have used mui for multiple components.
some of them are: - autocomplete - avatar - modal - snackbar - drawer - heavily customized card - imageList - icons - typography

### antD

i have used antD for some quite complex components, - carousel - calendar
these components are very usefull, but can be complex to customize

## Design

The main focus of the design is for the consumer of the page, and a little less the venue managers, altough i have created an detailed adminPanel.
i wanted to not have too many diffrent colors, so i choose two shades of blue. i also use white quite a bit.

### wireframe

a link to all the wireframes
https://www.figma.com/file/jZ7CFJzHLIRjoVWJP9dmBc/wireframe-and-design?type=design&node-id=14%3A43&t=krswGgiS1dZrZAub-1

here you can see my wireframes, they are really rough and are directly copied from my paper wireframes.

### ideas

i Wanted to make the page as simple as possible, for easy usage, thats why i planned for a search on place / avalible dates on the hero.
In the start i had ambitions about location search as well, but that plan was scrapped since the google api can be expensive. Also very few venues have location that works.
the location search was supposed to sort all venues using the harvesine formula, a formula for calculating distance.

some ideas i have implemented are filtering and sorting. it is possible to filter after the meta tags, price and guest range. avalible dates.
venues can also be sorted based on the api sort functions (a to z or z to a, price low to high or hight to low).

even though the assignment stated we should display what days where already booked on diffrent venues, i felt like it should also be based on guests, not just bookings.
so i created an extra function for the Booking calendar. This function takes every booking of an venue and creates an array with every booked day. This array also have amount of guests that day. with a little calculation it will disable the day if it is fully booked or when you have too many guests for it to acompany.
this can be a little complicated on edit booking, so i created some exeptions for editing the booking.

From the start i had multiple ideas about statistics for venues, an Admin panel where you could keep track of all your venues, and see how many guests you have and revenue.
This is also the place where you can check out all the bookings of an venue.

## Packages used

- [MUI](https://mui.com/)
- [Yup](https://www.npmjs.com/package/yup)
- [react-hook-form](https://react-hook-form.com/)
- [AntDesign](https://ant.design/)
- [ChartJs](https://www.chartjs.org/)
- [Countup](https://www.npmjs.com/package/react-countup)
- [Dayjs](https://day.js.org/)
- [FontSource](https://www.npmjs.com/package/@fontsource/roboto)
- [craco](https://www.npmjs.com/package/@craco/craco)

## folder construction

    I will admit some of the folderconstructions are not the best.
    i tried splitting the diffrent categories in diffrent folders, but at one point, there there difficulties in where i should put some of the components.
    should i put the editInput under input or edit...


    i have some utils, such as simple functions and constants.

## context

I have some diffrent context

- addEdit
- user
- booking
- modal
- screen
- snackBar
- searchfilter
- venue
  some only holds state, while other like screen context updates some elements based on the screen size.

## Hooks

i have created some hooks for diffrent purposes.
Some are to access context quicker and reduse usace of useContext. other fetches or sends data.

## schemas

i have used schemas to validate creation of venues, as well as some the modals(login,register, avatar)
I have used the responses as response messages for the user

## Modals

the modal consists of an outer and inenr modal, the outer is the exact same. The inner gets set by an hook, that sends inn an whole component.

## button

i have customized an Mui button to be as i wanted. but some places i had to use the default MUI button. (text for example)

## redirects

on Moodle it said to put the \_redirects in the root of my project, but that did nothing, when i put it in the public folder it worked, i do not know why, but that is the reason for it being there.

## secrets

there is one secret in the project, an google maps static map key.
this is not required to replicate the project, but maps will not show when not added. (does not affect netlify)

## small bugs

so because of the way react is built, and also because some things i really wanted to do:
in three places, all useEffects, i have used an comment to disable the warning of missing dependencies.
this is because of infinete rerenders, and i have not found a way to fix it.

**NOTE:** One of the UseEffects can maybe be fixed with useState(prev => code here) but i have not found a way of fixing the other two.

the useEffects are in:

- BookingCalendar
- editVenue
- addVenue
