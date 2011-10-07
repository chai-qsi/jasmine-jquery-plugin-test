describe("Ajax call tests", function() {
	var modelObject, request;
	var onSuccess, onFailure;
	
	beforeEach(function() {
		jasmine.Ajax.useMock();
		
		onSuccess = jasmine.createSpy('onSuccess');
		onFailure = jasmine.createSpy('onFailure');
		
		modelObject = new ModelObject();
		modelObject.modelMethod("reqParam1=1&reqParam2=test", {
			onSuccess : onSuccess,
			onFailure : onFailure
		});
		
		request = mostRecentAjaxRequest();
	});
	
	it("calls corrent URL", function() {
		expect(request.url).toEqual("/some/testurl?reqParam1=1&reqParam2=test");
	});
	
	describe("on success", function() {
		beforeEach(function() {
			request.response(TestResponses.modelMethod.success);
		});
		
		it("calls onSuccess", function() {
			expect(onSuccess).toHaveBeenCalled();
			expect(onSuccess).toHaveBeenCalledWith(jasmine.any(Array));
			
			var successArgs = onSuccess.mostRecentCall.args[0];
			expect(successArgs.length).toEqual(1);
			expect(successArgs[0].keyvauluepairs.key1).toEqual("value1");
		});
		
		it("does not call onFailure", function() {
			expect(onFailure).not.toHaveBeenCalled();
		});
	});
	
	describe("on failure", function() {
		beforeEach(function() {
			request.response(TestResponses.modelMethod.failure);
		});
		
		it("calls onFailure", function() {
			expect(onFailure).toHaveBeenCalled();
		});
		
		it("does not call onSuccess", function() {
			expect(onSuccess).not.toHaveBeenCalled();
		});
	});
});