'use strict';


let locations = {
  'Amman': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=uni%20of%20jordan&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Zarqa': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=sarah%20market%20zarqa&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Irbid': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=king%20abdullah%20park%20irbid&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Madaba': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=madaba%20visitors%20park&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Salt': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%A8%D9%84%D8%AF%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B3%D9%84%D8%B7&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Ajloun': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%B9%D9%8A%D9%86%20%D8%AC%D9%86%D8%A7&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Jarash': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%AF%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Mafraq': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%A7%D9%84%20%D8%A7%D9%84%D8%A8%D9%8A%D8%AA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Aqaba': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=%D8%B4%D8%B7%20%D8%A7%D9%84%D8%BA%D9%86%D8%AF%D9%88%D8%B1&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Maan': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=hashen%20alaffouri&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Tafila': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=alqasr%20grosery%20tafila&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>',
  'Karak': '<div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=karak%20castle&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div><style>.mapouter{position:relative;text-align:right;height:300px;width:300px;}.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:300px;}</style></div>'
};
// RideRequest constructor.
function RideRequest(name, from, to, day, time, payment, driverGender) {
  this.name = name;
  this.from = from;
  this.to = to;
  this.day = day;
  this.time = time;
  this.payment = payment;
  this.driverGender = driverGender;
  RideRequest.all.push(this);
}
RideRequest.all = [];


// RideOffer constructor.
var RideOffer = function (name, from, to, day, time, payment, gender, cost, phone, email) {
  this.name = name;
  this.path = `img/${name}.jpg`;
  this.from = from;
  this.to = to;
  this.fromLocation = locations[from];
  this.toLocation = locations[to];
  this.day = day;
  this.time = time;
  this.payment = payment;
  this.gender = gender;
  this.cost = cost;
  this.phone = phone;
  this.email = email;
  RideOffer.all.push(this);
};
RideOffer.all = [];


function generateOffers() {
  new RideOffer('Faris', 'Amman', 'Zarqa', 'Sunday', '00:00', 'Cash', 'Male', '2Jd', '+962-805-555-9931', 'Faris@gmail.com');
  new RideOffer('Khaled', 'Zarqa', 'Irbid', 'Monday', '00:00', 'Credit', 'Male', '3JD', '+962-805-554-2315', 'Khaled@gmail.com');
  new RideOffer('Mohammed', 'Irbid', 'Karak', 'Tuesday', '01:00', 'Cash', 'Male', '4JD', '+962-805-559-9220', 'Mohammed@gmail.com');
  new RideOffer('Ahmad', 'Salt', 'Maan', 'Wednesday', '01:00', 'Credit', 'Male', '5JD', '+962-795-554-2716', 'Ahmad@gmail.com');
  new RideOffer('Omar', 'Madaba', 'Aqaba', 'Thursday', '02:00', 'Cash', 'Male', '6JD', '+962-775-553-9306', 'Omar@gmail.com');
  new RideOffer('Rami', 'Mafraq', 'Mafraq', 'Friday', '02:00', 'Credit', 'Male', '2Jd', '+962-775-558-0905', 'Rami@gmail.com');
  new RideOffer('Osama', 'Ajloun', 'Ajloun', 'Saturday', '03:00', 'Cash', 'Male', '3JD', '+962-805-550-2954', 'Osama@gmail.com');
  new RideOffer('Malik', 'Jarash', 'Jarash', 'Sunday', '03:00', 'Credit', 'Male', '4JD', '+962-805-559-4880', 'Malik@gmail.com');
  new RideOffer('Rashed', 'Amman', 'Zarqa', 'Monday', '04:00', 'Cash', 'Male', '5JD', '+962-775-559-5866', 'Rashed@gmail.com');
  new RideOffer('Laith', 'Karak', 'Amman', 'Tuesday', '04:00', 'Credit', 'Male', '6JD', '+962-775-552-0513', 'Laith@gmail.com');
  new RideOffer('Kareem', 'Maan', 'Zarqa', 'Wednesday', '05:00', 'Cash', 'Male', '2Jd', '+962-805-558-4610', 'Kareem@gmail.com');
  new RideOffer('Wael', 'Aqaba', 'Irbid', 'Thursday', '05:00', 'Credit', 'Male', '3JD', '+962-775-554-9939', 'Wael@gmail.com');
  new RideOffer('Basil', 'Tafila', 'Salt', 'Friday', '06:00', 'Cash', 'Male', '4JD', '+962-775-557-6525', 'Basil@gmail.com');
  new RideOffer('Yazan', 'Amman', 'Zarqa', 'Saturday', '06:00', 'Credit', 'Male', '5JD', '+962-775-557-1628', 'Yazan@gmail.com');
  new RideOffer('Zaid', 'Zarqa', 'Irbid', 'Sunday', '07:00', 'Cash', 'Male', '6JD', '+962-805-550-1491', 'Zaid@gmail.com');
  new RideOffer('Abdullah', 'Irbid', 'Salt', 'Monday', '07:00', 'Credit', 'Male', '2Jd', '+962-805-555-4831', 'Abdullah@gmail.com');
  new RideOffer('Samer', 'Salt', 'Madaba', 'Tuesday', '08:00', 'Cash', 'Male', '3JD', '+962-805-553-3326', 'Samer@gmail.com');
  new RideOffer('Bahaa', 'Madaba', 'Mafraq', 'Wednesday', '08:00', 'Credit', 'Male', '4JD', '+962-805-553-4747', 'Bahaa@gmail.com');
  new RideOffer('Mahmoud', 'Mafraq', 'Ajloun', 'Thursday', '09:00', 'Cash', 'Male', '5JD', '+962-795-551-4204', 'Mahmoud@gmail.com');
  new RideOffer('Alaa', 'Ajloun', 'Jarash', 'Friday', '09:00', 'Credit', 'Male', '6JD', '+962-795-556-8016', 'Alaa@gmail.com');
  new RideOffer('Marwan', 'Jarash', 'Salt', 'Saturday', '10:00', 'Cash', 'Male', '2Jd', '+962-795-559-1275', 'Marwan@gmail.com');
  new RideOffer('Hasan', 'Amman', 'Madaba', 'Sunday', '10:00', 'Credit', 'Male', '3JD', '+962-775-554-4103', 'Hasan@gmail.com');
  new RideOffer('Ayman', 'Karak', 'Mafraq', 'Monday', '11:00', 'Cash', 'Male', '4JD', '+962-805-557-2855', 'Ayman@gmail.com');
  new RideOffer('Moayyad', 'Maan', 'Ajloun', 'Tuesday', '11:00', 'Credit', 'Male', '5JD', '+962-795-556-3703', 'Moayyad@gmail.com');
  new RideOffer('Hatem', 'Aqaba', 'Amman', 'Wednesday', '12:00', 'Cash', 'Male', '6JD', '+962-775-553-5617', 'Hatem@gmail.com');
  new RideOffer('Rana', 'Tafila', 'Karak', 'Thursday', '12:00', 'Credit', 'Female', '2Jd', '+962-775-559-4609', 'Rana@gmail.com');
  new RideOffer('Ayat', 'Amman', 'Maan', 'Friday', '13:00', 'Cash', 'Female', '3JD', '+962-795-559-1062', 'Ayat@gmail.com');
  new RideOffer('Lina', 'Zarqa', 'Aqaba', 'Saturday', '13:00', 'Credit', 'Female', '4JD', '+962-805-557-4609', 'Lina@gmail.com');
  new RideOffer('Rand', 'Irbid', 'Tafila', 'Sunday', '14:00', 'Cash', 'Female', '5JD', '+962-795-555-4489', 'Rand@gmail.com');
  new RideOffer('Noor', 'Salt', 'Amman', 'Monday', '14:00', 'Credit', 'Female', '6JD', '+962-795-554-6672', 'Noor@gmail.com');
  new RideOffer('Sarah', 'Madaba', 'Zarqa', 'Tuesday', '15:00', 'Cash', 'Female', '2Jd', '+962-775-556-1205', 'Sarah@gmail.com');
  new RideOffer('Laila', 'Mafraq', 'Irbid', 'Wednesday', '15:00', 'Credit', 'Female', '3JD', '+962-795-558-4812', 'Laila@gmail.com');
  new RideOffer('Lara', 'Ajloun', 'Madaba', 'Thursday', '16:00', 'Cash', 'Female', '4JD', '+962-775-557-5159', 'Lara@gmail.com');
  new RideOffer('Maryam', 'Jarash', 'Amman', 'Friday', '16:00', 'Credit', 'Female', '5JD', '+962-795-551-2315', 'Maryam@gmail.com');
  new RideOffer('Mai', 'Amman', 'Karak', 'Saturday', '17:00', 'Cash', 'Female', '6JD', '+962-805-556-8807', 'Mai@gmail.com');
  new RideOffer('Bana', 'Karak', 'Jarash', 'Sunday', '17:00', 'Credit', 'Female', '2Jd', '+962-795-556-1973', 'Bana@gmail.com');
  new RideOffer('Lana', 'Maan', 'Amman', 'Monday', '18:00', 'Cash', 'Female', '3JD', '+962-805-554-3241', 'Lana@gmail.com');
  new RideOffer('Raya', 'Aqaba', 'Tafila', 'Tuesday', '18:00', 'Credit', 'Female', '4JD', '+962-775-554-1204', 'Raya@gmail.com');
  new RideOffer('Rayan', 'Tafila', 'Amman', 'Wednesday', '19:00', 'Cash', 'Female', '5JD', '+962-795-553-8559', 'Rayan@gmail.com');
  new RideOffer('Salma', 'Amman', 'Zarqa', 'Thursday', '19:00', 'Credit', 'Female', '6JD', '+962-805-552-6712', 'Salma@gmail.com');
  new RideOffer('Amal', 'Zarqa', 'Irbid', 'Friday', '20:00', 'Cash', 'Female', '2Jd', '+962-795-551-9914', 'Amal@gmail.com');
  new RideOffer('Renad', 'Irbid', 'Salt', 'Saturday', '20:00', 'Credit', 'Female', '3JD', '+962-775-556-4233', 'Renad@gmail.com');
  new RideOffer('Dina', 'Salt', 'Maan', 'Sunday', '21:00', 'Cash', 'Female', '4JD', '+962-805-559-5972', 'Dina@gmail.com');
  new RideOffer('Diana', 'Madaba', 'Aqaba', 'Monday', '21:00', 'Credit', 'Female', '5JD', '+962-775-551-9368', 'Diana@gmail.com');
  new RideOffer('Haneen', 'Mafraq', 'Tafila', 'Tuesday', '22:00', 'Cash', 'Female', '6JD', '+962-795-558-7663', 'Haneen@gmail.com');
  new RideOffer('Malak', 'Ajloun', 'Amman', 'Wednesday', '22:00', 'Credit', 'Female', '2Jd', '+962-775-553-4665', 'Malak@gmail.com');
  new RideOffer('Bushra', 'Jarash', 'Madaba', 'Thursday', '23:00', 'Cash', 'Female', '3JD', '+962-795-555-9822', 'Bushra@gmail.com');
  new RideOffer('Ola', 'Amman', 'Mafraq', 'Friday', '23:00', 'Credit', 'Female', '4JD', '+962-775-558-7844', 'Ola@gmail.com');
  new RideOffer('Alia', 'Zarqa', 'Ajloun', 'Saturday', '00:00', 'Cash', 'Female', '5JD', '+962-795-551-9827', 'Alia@gmail.com');
  new RideOffer('Shatha', 'Irbid', 'Jarash', 'Sunday', '00:00', 'Credit', 'Female', '6JD', '+962-795-555-6661', 'Shatha@gmail.com');
}
generateOffers();
