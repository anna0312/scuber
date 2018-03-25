# SCUBER

[https://anna0312.github.io/scuber/](https://anna0312.github.io/scuber/)

SCUBER is a dive logging tool, intended to give divers the ability to record their dives and view their dive history.

This is the repository for the front end of the application.

## Technologies used
Handlebars, HTML, CSS, Javascript, JQuery, and the various configuration packages and
linters available to me through the template.

I also imported fonts from google fonts

## Planning and Process
My original vision (as will be visible in the ERDs and wireframes) had a lot more bells an whistles, including:
A separate Locations table, which would contain the coordinates and characteristics of each dive location
A google map feature that would plot those coordinates on the map
The ability for a user to add a location to the locations table
The ability for the user to view other people's reviews of dive Locations
A stats view using Charts.js

Based on what I learned last time, and on the advice I got from our wonderful instructors, I re-evaluated
the plan so that my MVP was met first, which it has been: the ability to log dives, view dives, edit dives, and delete dives. I was disapointed not to get to include the bells and whistles, but hope to at least go back and add the Locations table so that I can practice building the many-to-many relationship.

## Issues I would like to fix
There are a few glitches that I would like to solve, most noteably that the view of the list of dives
is supposed to refresh when someone has added a new entry or deleted an existing dive. The order of operations seems
to be messing things up because the refresh always shows the previous new item, not the current one.

### Wireframes
https://imgur.com/a/G09sR

### User stories

As a user I want to be able to create an account
As a user I want to be able to log in
As a user I want to be able to see my dive history
As a user I want to be able to enter new dives
As a user I want to be able to edit existing dives
As a user I want to be able to delete dives
