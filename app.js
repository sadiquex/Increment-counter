const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // change the target to a number
    const target = parseInt(counter.getAttribute("data-target"));
    const c = parseInt(counter.innerText);

    // how much we are incrementing the target by
    const increment = target / 500;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;

      // keep calling update counter after 1ms till it gets to target
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
