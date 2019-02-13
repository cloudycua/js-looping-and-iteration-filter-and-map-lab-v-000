function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function(driver) {
      return driver.name;
  });
}

function exactMatch(drivers, attribute, value) {
  return drivers.filter(function(driver) {
    return driver.attribute === value;
  });
};
