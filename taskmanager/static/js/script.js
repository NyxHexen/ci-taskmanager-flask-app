// Sidenav init
document.addEventListener('DOMContentLoaded', function () {
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);


  //Datepicker init
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {
      done: "Select"
    }
  });

  // Select init
  let selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

  // Collapsible init
  let collapsibles = document.querySelectorAll('.collapsible');
  M.Collapsible.init(collapsibles);
});
