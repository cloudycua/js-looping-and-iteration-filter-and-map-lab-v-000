function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNameWithRevenueOver(drivers, revenue) {
  const newDrivers = [];
  for (const name in driversWithRevenueOver(drivers, revenue)) {
    newDrivers.push(name);
  }
}
