function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver)) {
    
  }
}

function driversWithRevenue(drivers, revenue) {
  const newDrivers = map(drivers, function(driver)) {
    return Object.assign({}, driver, { revenue: 'revenue'});
  }
  return newDrivers;
}
