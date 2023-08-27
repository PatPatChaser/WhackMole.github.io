const showHammerDiv = (hammerDiv) => {
  $(hammerDiv).show();
  $(hammerDiv).children(".hammer").addClass("-rotate-45");
  setTimeout(() => {
    $(hammerDiv).children(".hammer").removeClass("-rotate-45");
    hideHammerDiv();
  }, 200);
};

const hideHammerDiv = () => {
  $(".hammer-div").hide();
};

hideHammerDiv();
export default showHammerDiv;
