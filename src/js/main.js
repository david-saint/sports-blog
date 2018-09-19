/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
document.addEventListener('DOMContentLoaded', function () {
  let collapsible = document.querySelectorAll('.collapsible');
  let collInstances = M.Collapsible.init(collapsible, { });

  let expandable = document.querySelectorAll('.collapsible.expandable');
  let expInstances = M.Collapsible.init(expandable, { accordion: false });
});
