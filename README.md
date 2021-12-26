# Google Sheets budgeting template

## Instructions

1. Copy the [sample year](https://docs.google.com/spreadsheets/d/1L0hlw2Aj91cdvMGzJxN24Vu6ns8Bl7oNBPTPCDbfQPw/edit?usp=sharing) to your desired folder with the appropriate name
2. Copy the [sample month](https://docs.google.com/spreadsheets/d/1-qlCjc9i-t_JzJJjd1RwGDwTQ7QHjhQUaqDio1RjYRs/edit?usp=sharing) to your desired folder with the appropriate name
3. Open month copy; click Extras->Authorize Intialization. Authorize the unverified script following these steps: https://stackoverflow.com/a/48482520. After verification, click Extras->Initialize Sheet
    * Verification is necessary because I am not a corporate entity authorized by google
4. Modify the sheets (tabs, in the bottom left) in the month copy as necessary
    * You can delete, rename, or duplicate and rename the account tabs to suit your situation
6. Open the year copy; click Extras->Authorize Intialization. Authorize the unverified script following the same steps as above: https://stackoverflow.com/a/48482520. After verification, click Extras->Initialize Sheet
7. Unprotect Sheet1 and URLs in the year copy and unprotect all sheets except Choices in the month copy
8. In the month copy, on the Choices sheet, update the Year URL in H1 to point to the year copy; then, click on A1 and Allow Access
9. Copy the base url from the month copy and paste into the year copy's URL sheet under the correct month header
10. Allow Access in the year copy on Sheet1

## Notes

* For logging a return or refund: assign it to the appropriate category but prepend the number with a negative.
* If you try to have duplicate category names, you'll get errors; all categories must be unique. Special categories are "Income" and "Zeroed": they are present by default. Autocomplete is nicer if you spread out category names over the alphabet. If you change a category name, the errors will resolve in <10 seconds.
* Category resolution is based on exact string matching. This means that if you change an existing category name after logging expenses for a month using the old category name, they will be orphaned. Fixing this is a primary TODO.
