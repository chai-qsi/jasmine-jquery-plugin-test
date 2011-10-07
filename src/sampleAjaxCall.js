function ModelObject () {
	this.baseUrl = "/some/testurl";
}

ModelObject.prototype.modelMethod = function(queryString, callbacks) {
	$.ajax({
		type: "GET",
		url: this.baseUrl,
		data: queryString,
		success: function(data, status, request) {
			var arr = [];
			$(data.response).each(function(index, result) {
				arr.push(result);
			});
			callbacks.onSuccess(arr);
		},
		error: callbacks.onFailure
	});
}
