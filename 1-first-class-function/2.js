// ignorant
var getTheDataFromServer = function(callback) {
  return ajaxCall(function(json) {
    return callback(json);
  });
};

// well formed function
var getServerStuff = ajaxCall;

//----------------------------------------------

// this line
return ajaxCall(function(json) {
  return callback(json);
});

// is the same as this line
return ajaxCall(callback);

// so refactor getServerStuff
var getTheDataFromServer = function(callback) {
  return ajaxCall(callback);
};

// ...which is equivalent to this
var getTheDataFromServer = ajaxCall; // () round brackets are avoided