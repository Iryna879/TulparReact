// TODO: подключить модель для сущности
const doctors = require("../models/specialists");
const { specialists, slot, dateSchedule } = doctors;



// Create => POST
exports.post = function (request, response) {
    console.log("Run POST");
    const element = new specialists(request.body);
    element.save(function (err) {
        if (err) {
            console.log(err);
            response.json(err);
            return;
        }
        return response.json(element);
    });
}

// Read => GET
exports.get = function (request, response) {
    console.log("Run GET");
    specialists.find({},
        function (err, allData ) {
            if (err){
                console.log(err);
                response.json(err);
                return;
            }
            response.json(allData);
        }
    );
}

// To get the slots available for the date
exports.getSlots = function (request, response)  {
      const {id} = request.params;
      specialists.find({_id: id},
          function(err, allData) {
          if(err){
              console.log(err);
              return err;
          }
           console.log(allData);
          if(allData.length > 0) {
              //console.log("Doctor  found in the database!");
                          return response.json(allData);

          } else {
              console.log("Doctor not found in the database!");
              return response.status(201).json({
                  message: "Doctor not found in the database!",
              });
          }
      });
}



