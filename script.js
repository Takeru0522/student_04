// slick
$(".multiple-items").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
});


// chart
jQuery(document).ready(function ($) {
  // Javascript Chart
  if ($("#javascript").length) {
    var doughnutData = [
      {
        value: 30,
        color: "#ffc6c6",
      },
      {
        value: 70,
        color: "#dbdbdb",
      },
    ];
    var myDoughnut = new Chart(
      document.getElementById("javascript").getContext("2d")
    ).Doughnut(doughnutData);
  }

  // Bootstrap Chart
  if ($("#bootstrap").length) {
    var doughnutData = [
      {
        value: 20,
        color: "#ffc6c6",
      },
      {
        value: 80,
        color: "#dbdbdb",
      },
    ];
    var myDoughnut = new Chart(
      document.getElementById("bootstrap").getContext("2d")
    ).Doughnut(doughnutData);
  }

  // WordPress Chart
  // color: "#74cfae"
  if ($("#wordpress").length) {
    var doughnutData = [
      {
        value: 50,
        color: "#ffc6c6",
      },
      {
        value: 50,
        color: "#dbdbdb",
      },
    ];
    var myDoughnut = new Chart(
      document.getElementById("wordpress").getContext("2d")
    ).Doughnut(doughnutData);
  }

  // Photoshop Chart
  if ($("#photoshop").length) {
    var doughnutData = [
      {
        value: 70,
        color: "#ffc6c6",
      },
      {
        value: 20,
        color: "#dbdbdb",
      },
    ];
    var myDoughnut = new Chart(
      document.getElementById("photoshop").getContext("2d")
    ).Doughnut(doughnutData);
  }
});
