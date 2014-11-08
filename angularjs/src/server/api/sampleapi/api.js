module.exports = function() {
    var service = {
        list: list,
        create:create,
        remove:remove,
        edit:edit
    };
    return service;

    function list(req,res) {
        res.send("Agent Report List");
    };
    function create(req,res) {
        res.send("Agent Report Create " + req.body.id + ""); // can verify with rest client by passing the id as parameter
    };
    function remove(req,res) {
        res.send("Agent Report remove" + req.body.id);   // can verify with rest client by passing the id as parameter
    };
    function edit(req,res) {
        res.send("Agent Report edit"  + req.params.id + ""); //can verify with rest client by passing the id as parameter
    };

};