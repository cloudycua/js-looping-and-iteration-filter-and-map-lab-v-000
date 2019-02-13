function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNameWithRevenueOver(drivers, revenue) {
  let driverNames = [];
  for (let driver in driversWithRevenueOver(drivers)) {
    driverNames.push(driver[name]);
  }
}
