
/*
 * DLL Doc Catalog Service
 *
 * Service for managing Document Catalog
 * Update to force push
 */

//var documents;

var api = require("./routes/api.js")

state.documents = state.documents || [];

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
 
//List all
 Sandbox.define('/api/v1/documents', 'get', function(req, res) {
    // Return all documents
    return res.json(state.documents);
});

//Get by id
 Sandbox.define('/api/v1/documents/{docCatalogId}', 'get', function(req, res) {
    var doc = res.json(_.filter(state.documents, { 'docCatalogId': req.params.docCatalogId }) || {});
    
        if (!doc) { 
        return res.json(404, { error: { message: 'Document ' + req.params.docCatalogId + ' doesnt exist.' } });
    }
    
     return res.json(doc);
    
});

//Create
Sandbox.define('/api/v1/documents', 'POST', function(req, res) {
    
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // retrieve documents or, if there are none, init to empty array
    //state.documents = state.documents || [];
    
    // persist document by adding to the state object
    state.documents.push(req.body);

    // Send the response body.
    res.json({
        "status": "OK",
        "message": "Document created"
    });
    
});

//Advanced Search
Sandbox.define('/api/v1/documents/searches', 'POST', function(req, res) {
    
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    var name = req.body.name;
    
    //var doc = _.filter(state.documents, { 'name': name });
    
    var doc = _.filter(state.documents, function(document) { return document.name.match(new RegExp(name)); });
    
    if (!doc) { 
        return res.json(404, { error: { message: 'Document doesnt exist' } });
    }
    
    return res.json(doc);
    

    //return res.json(_.filter(state.documents, { 'name': name }) || {});


});


