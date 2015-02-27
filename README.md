# Problems

These can be done in any order and don't depend on each other.
If you get stuck on one, try moving on to another.

1. Do not animate the same note in and out when you click
 to fetch notes
2. Prevent editing an individual note from updating that
 note's title in the notes list
3. Prevent submission of an empty title/text note. You can
 do this with the Browser's built-in validation, but
 try to use Anglular's [very nice built-in form validation](https://docs.angularjs.org/guide/forms)
4. When you finish editing or adding a note (i.e. it is
 saved to the server), redirect to the notes list.
 You can see how the Edit controller redirects when you try
 to view a note that does not exist.
5. Use a directive to display the navigation bar
6. Add a service that displays the current page you are
 viewing (outside of the main ui-view). You can use
 the `data` property in the `stateProvider` configuration
 to set arbitrary data like state titles.
7. Create a directive that displays last-viewed note (both
 the title and text) at all times. You can view a note by
 clicking on its title in the list.  Even if you navigate
 to the homepage, this "last viewed note" should still
 appear. If you use `$rootScope` to do this, you're fired.
8. On the homepage, add the time. Clicking on the time
 should make it display in the "last viewed" spot.
9. Update this directive so that it has an X button. For
 "last viewed note," it should delete the note and display
 "REMOVED." For the time, it should just hide the display.
10. Update the navigation bar to indicate the selected route
 (hint: you can `$state` in the controller to check what
 the current state is, then perhaps `ngClass`).

## EXTRA

1. This is a hard one, but it is possible (one solution
 involves using deffereds, `$q` in the service).
 When a user goes directly to `/notes/:id` on a page load,
 they will be redirected to `/notes` because no notes are
 loaded so that note is not there. Get `/notes/:id` to work
 on an initial page load too.
2. Don't allow the user to click the delete button for a
 note while the note is animating out
