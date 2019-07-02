

/*
 * GET /api/v1/documents
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiV1Documents = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /api/v1/documents/searches
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiV1DocumentsSearches = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api/v1/documents/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * docCatalogId(type: integer) - path parameter - Doc catalog id of the Document.
 */
exports.getApiV1Documents2 = function(req, res) {
	req.check('docCatalogId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiV1Documents2');
};