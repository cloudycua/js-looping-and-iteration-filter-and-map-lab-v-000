function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNameWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers).filter(function(driver) {
    return driver[name];
  });
}
